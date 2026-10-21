interface LeadBody {
  phone?: unknown
  name?: unknown
  service?: unknown
  address?: unknown
  comment?: unknown
  website?: unknown
}

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : ''

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export default defineEventHandler(async (event) => {
  const body = await readBody<LeadBody>(event)

  // Бот заповнив приховане поле — відповідаємо «ок», але нічого не шлемо
  if (clean(body?.website, 200)) return { ok: true }

  const phone = clean(body?.phone, 32)
  const digits = phone.replace(/\D/g, '')
  if (!/^0\d{9}$/.test(digits) && !/^380\d{9}$/.test(digits)) {
    throw createError({ statusCode: 400, statusMessage: 'Невірний номер телефону' })
  }

  const lines = [
    '<b>Нова заявка з сайту</b>',
    `Телефон: ${escapeHtml(phone)}`,
    clean(body?.name, 80) && `Ім'я: ${escapeHtml(clean(body?.name, 80))}`,
    clean(body?.service, 120) && `Що потрібно: ${escapeHtml(clean(body?.service, 120))}`,
    clean(body?.address, 200) && `Адреса: ${escapeHtml(clean(body?.address, 200))}`,
    clean(body?.comment, 1000) && `Коментар: ${escapeHtml(clean(body?.comment, 1000))}`
  ].filter(Boolean)

  const { telegramBotToken, telegramChatId } = useRuntimeConfig(event)

  if (!telegramBotToken || !telegramChatId) {
    // Бот ще не налаштований: у розробці просто показуємо заявку в консолі
    console.warn('[lead] Telegram не налаштований, заявка:\n' + lines.join('\n'))
    return { ok: true, delivered: false }
  }

  try {
    await $fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      body: { chat_id: telegramChatId, text: lines.join('\n'), parse_mode: 'HTML' }
    })
  } catch (error) {
    console.error('[lead] Не вдалося надіслати в Telegram', error)
    throw createError({ statusCode: 502, statusMessage: 'Не вдалося надіслати заявку' })
  }

  return { ok: true, delivered: true }
})

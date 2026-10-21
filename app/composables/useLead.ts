import { company } from '~/data/site'

export interface LeadPayload {
  phone: string
  name?: string
  service?: string
  address?: string
  comment?: string
  /** Поле-пастка для ботів, людина його не бачить */
  website?: string
}

export function useLead() {
  const toast = useToast()
  const sending = ref(false)

  async function send(payload: LeadPayload): Promise<boolean> {
    sending.value = true
    try {
      await $fetch('/api/lead', { method: 'POST', body: payload })
      toast.add({
        title: 'Заявку надіслано',
        description: 'Передзвонимо найближчим часом.',
        color: 'success',
        icon: 'i-lucide-check'
      })
      return true
    } catch {
      toast.add({
        title: 'Не вдалося надіслати заявку',
        description: `Зателефонуйте нам: ${company.phoneDisplay}`,
        color: 'error',
        icon: 'i-lucide-phone'
      })
      return false
    } finally {
      sending.value = false
    }
  }

  return { send, sending }
}

/** Мінімальна перевірка українського номера: 10 цифр з 0 на початку або 12 з 380 */
export function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '')
  return /^0\d{9}$/.test(digits) || /^380\d{9}$/.test(digits)
}

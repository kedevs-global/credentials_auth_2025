'use client'

import { Badge } from '@/components/ui/badge'
import { CalendarIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

function CurrentDateBadge() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    updateDate()
  }, [])

  const updateDate = () => {
    const now = new Date()
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    )

    const timeUntilMidnight = tomorrow.getTime() - now.getTime()

    setDate(now)
    setTimeout(updateDate, timeUntilMidnight)
  }

  const formattedDate = new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)

  const finalDate =
    formattedDate.charAt(0).toUpperCase() +
    formattedDate.slice(1).replace(/ de (\d{4})$/, ' del $1')

  return (
    <Badge
      variant='outline'
      className='px-3 py-1 text-sm font-medium me-2 rounded-full'
    >
      <CalendarIcon className='w-4 h-4 mr-2' />
      {finalDate}
    </Badge>
  )
}

export default CurrentDateBadge

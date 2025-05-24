export const calendarData = {
  currentMonth: 'October 2021',
  daysOfWeek: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  dates: [
    {
      date: 25,
      times: ['16:00', '11:00', '12:00'],
      highlight: false,
      appointments: [
        { time: '16:00', type: 'consultation', available: true },
        { time: '11:00', type: 'checkup', available: true },
        { time: '12:00', type: 'consultation', available: true }
      ]
    },
    {
      date: 26,
      times: ['08:00', '09:00', '10:00'],
      highlight: true,
      appointments: [
        { time: '08:00', type: 'consultation', available: true },
        { time: '09:00', type: 'dentist', booked: true, doctor: 'Dr. Cameron Williamson' },
        { time: '10:00', type: 'consultation', available: true }
      ]
    },
    {
      date: 27,
      times: ['12:00', '13:00'],
      highlight: false,
      appointments: [
        { time: '12:00', type: 'consultation', available: true },
        { time: '13:00', type: 'consultation', available: true }
      ]
    },
    {
      date: 28,
      times: ['16:00', '11:00'],
      highlight: false,
      appointments: [
        { time: '16:00', type: 'consultation', available: true },
        { time: '11:00', type: 'checkup', available: true }
      ]
    },
    {
      date: 29,
      times: ['14:00', '16:00'],
      highlight: false,
      appointments: [
        { time: '14:00', type: 'consultation', available: true },
        { time: '16:00', type: 'consultation', available: true }
      ]
    },
    {
      date: 30,
      times: ['12:00', '14:00', '15:00'],
      highlight: true,
      appointments: [
        { time: '12:00', type: 'physiotherapy', booked: true, doctor: 'Dr. Kevin Djones' },
        { time: '14:00', type: 'consultation', available: true },
        { time: '15:00', type: 'consultation', available: true }
      ]
    },
    {
      date: 31,
      times: ['09:00', '10:00', '11:00'],
      highlight: false,
      appointments: [
        { time: '09:00', type: 'consultation', available: true },
        { time: '10:00', type: 'consultation', available: true },
        { time: '11:00', type: 'consultation', available: true }
      ]
    }
  ]
};

export const appointmentCards = [
  {
    id: 'dentist',
    type: 'Dentist',
    icon: '🦷',
    timeRange: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    date: '2021-10-26',
    color: 'bg-blue-600',
    textColor: 'text-white',
    status: 'confirmed'
  },
  {
    id: 'physiotherapy',
    type: 'Physiotherapy Appointment',
    icon: '🏃‍♀️',
    timeRange: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    date: '2021-10-30',
    color: 'bg-purple-200',
    textColor: 'text-purple-800',
    status: 'scheduled'
  }
];

export const upcomingAppointments = {
  thursday: [
    {
      id: 'health-checkup',
      title: 'Health checkup complete',
      icon: '💉',
      iconColor: 'text-red-500',
      time: '11:00 AM',
      type: 'checkup',
      doctor: 'Dr. Sarah Johnson',
      status: 'completed'
    },
    {
      id: 'ophthalmologist',
      title: 'Ophthalmologist',
      icon: '👁️',
      iconColor: '',
      time: '14:00 PM',
      type: 'consultation',
      doctor: 'Dr. Michael Chen',
      status: 'scheduled'
    }
  ],
  saturday: [
    {
      id: 'cardiologist',
      title: 'Cardiologist',
      icon: '❤️',
      iconColor: 'text-red-500',
      time: '12:00 AM',
      type: 'consultation',
      doctor: 'Dr. Emily Davis',
      status: 'scheduled'
    },
    {
      id: 'neurologist',
      title: 'Neurologist',
      icon: '🧠',
      iconColor: '',
      time: '16:00 PM',
      type: 'consultation',
      doctor: 'Dr. Robert Wilson',
      status: 'scheduled'
    }
  ]
};

export const doctors = [
  {
    id: 'cameron-williamson',
    name: 'Dr. Cameron Williamson',
    specialty: 'Dentistry',
    rating: 4.8,
    experience: '12 years',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday']
  },
  {
    id: 'kevin-djones',
    name: 'Dr. Kevin Djones',
    specialty: 'Physiotherapy',
    rating: 4.9,
    experience: '8 years',
    availability: ['Tuesday', 'Thursday', 'Saturday']
  },
  {
    id: 'sarah-johnson',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Medicine',
    rating: 4.7,
    experience: '15 years',
    availability: ['Monday', 'Wednesday', 'Thursday', 'Friday']
  },
  {
    id: 'michael-chen',
    name: 'Dr. Michael Chen',
    specialty: 'Ophthalmology',
    rating: 4.9,
    experience: '10 years',
    availability: ['Tuesday', 'Thursday', 'Saturday']
  },
  {
    id: 'emily-davis',
    name: 'Dr. Emily Davis',
    specialty: 'Cardiology',
    rating: 4.8,
    experience: '18 years',
    availability: ['Monday', 'Wednesday', 'Friday', 'Saturday']
  },
  {
    id: 'robert-wilson',
    name: 'Dr. Robert Wilson',
    specialty: 'Neurology',
    rating: 4.9,
    experience: '20 years',
    availability: ['Tuesday', 'Thursday', 'Saturday']
  }
];

export default {
  calendarData,
  appointmentCards,
  upcomingAppointments,
  doctors
};
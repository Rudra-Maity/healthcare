import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { calendarData, appointmentCards, upcomingAppointments } from '../Data/appointments';

export default function Calendar() {
  return (
    <div className="lg:col-span-5 space-y-6">
      {/* Calendar */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">{calendarData.currentMonth}</h3>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-4 h-4 text-blue-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {/* Days of week */}
          {calendarData.daysOfWeek.map(day => (
            <div key={day} className="font-medium text-gray-600 p-2">
              {day}
            </div>
          ))}
          
          {/* Calendar dates */}
          {calendarData.dates.map((day, index) => (
            <div key={index} className="p-1">
              <div className={`font-bold text-lg mb-1 ${day.highlight ? 'text-blue-600' : 'text-gray-800'}`}>
                {day.date}
              </div>
              <div className="space-y-1">
                {day.times.map((time, timeIndex) => {
                  const appointment = day.appointments.find(apt => apt.time === time);
                  const isBooked = appointment?.booked;
                  const isDentist = appointment?.type === 'dentist' && isBooked;
                  const isPhysiotherapy = appointment?.type === 'physiotherapy' && isBooked;
                  
                  return (
                    <div 
                      key={timeIndex} 
                      className={`text-xs px-1 py-0.5 rounded cursor-pointer hover:opacity-80 ${
                        isDentist ? 'bg-blue-600 text-white' : 
                        isPhysiotherapy ? 'bg-purple-200 text-purple-800' :
                        isBooked ? 'bg-gray-300 text-gray-600' :
                        'text-gray-600 hover:bg-gray-100'
                      }`}
                      title={isBooked ? `Booked: ${appointment.doctor}` : 'Available'}
                    >
                      {time}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* Appointment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {appointmentCards.map(appointment => (
            <div key={appointment.id} className={`${appointment.color} ${appointment.textColor} p-4 rounded-lg`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-lg">{appointment.icon}</div>
                <span className="font-semibold">{appointment.type}</span>
              </div>
              <div className="text-sm opacity-90">{appointment.timeRange}</div>
              <div className="text-sm opacity-90">{appointment.doctor}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">The Upcoming Schedule</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-3">On Thursday</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {upcomingAppointments.thursday.map(appointment => (
                <div key={appointment.id} className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold">{appointment.title}</span>
                    <div className={appointment.iconColor}>{appointment.icon}</div>
                  </div>
                  <div className="text-xs text-gray-600">{appointment.time}</div>
                  <div className="text-xs text-gray-500">{appointment.doctor}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-3">On Saturday</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {upcomingAppointments.saturday.map(appointment => (
                <div key={appointment.id} className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold">{appointment.title}</span>
                    <div className={appointment.iconColor}>{appointment.icon}</div>
                  </div>
                  <div className="text-xs text-gray-600">{appointment.time}</div>
                  <div className="text-xs text-gray-500">{appointment.doctor}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
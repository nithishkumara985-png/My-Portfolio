import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, CheckCircle2, Trophy, Filter, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';
import { INITIAL_SPORT_CLASSES } from '../data/portfolioData';
import { SportClass } from '../types/portfolio';

interface SportsClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SportsClubModal: React.FC<SportsClubModalProps> = ({ isOpen, onClose }) => {
  const [selectedSport, setSelectedSport] = useState<string>('All');
  const [classList, setClassList] = useState<SportClass[]>(INITIAL_SPORT_CLASSES);
  const [selectedClassForBooking, setSelectedClassForBooking] = useState<SportClass | null>(null);
  
  // Booking Form State
  const [athleteName, setAthleteName] = useState('Nithish Kumar A');
  const [athleteContact, setAthleteContact] = useState('nithishkumara985@gmail.com');
  const [bookingDate, setBookingDate] = useState('2026-11-02');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [generatedTicketId, setGeneratedTicketId] = useState<string>('');

  if (!isOpen) return null;

  const sports = ['All', 'Tennis', 'Football', 'Badminton', 'Basketball', 'Swimming'];

  const filteredClasses = selectedSport === 'All'
    ? classList
    : classList.filter((c) => c.sport === selectedSport);

  const handleOpenBooking = (cls: SportClass) => {
    setSelectedClassForBooking(cls);
    setBookingSuccess(false);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClassForBooking) return;

    // Decrement slots available
    setClassList((prev) =>
      prev.map((c) =>
        c.id === selectedClassForBooking.id
          ? { ...c, slotsAvailable: Math.max(0, c.slotsAvailable - 1) }
          : c
      )
    );

    const ticketId = `SC-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedTicketId(ticketId);
    setBookingSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#05070a]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0b0f17] border border-[#1e2638] rounded-[0.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden my-8">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0e121b] border-b border-[#1e2638] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[0.25rem] bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#f1f5f9] font-['Space_Grotesk']">
                Sports Club Management System — Live Demo
              </h3>
              <p className="text-xs font-mono text-[#64748b]">
                Interactive Training Session & Facility Scheduler
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#131924] rounded-[0.25rem] border border-[#1e2638] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Top Banner with Architecture Context */}
          <div className="p-4 bg-[#05070a] border border-[#1e2638] rounded-[0.375rem] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#00f0ff] uppercase tracking-wider block">
                Full-Stack Architecture Spec
              </span>
              <p className="text-xs text-[#cbd5e1] mt-0.5 font-sans">
                Built with React, Supabase PostgreSQL, and real-time slot synchronization. Zero double-booking guarantee.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#94a3b8] shrink-0">
              <span className="text-[#10b981] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Slot Locks Active
              </span>
              <span className="text-[#3b494b]">·</span>
              <span>Latency: 120ms</span>
            </div>
          </div>

          {/* Sports Filter Bar (Segmented Controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-mono text-[#64748b] flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" /> Sport:
            </span>
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-3 py-1 text-xs font-mono rounded-[0.25rem] transition-colors whitespace-nowrap cursor-pointer ${
                  selectedSport === sport
                    ? 'bg-[#00f0ff] text-[#05070a] font-semibold'
                    : 'bg-[#131924] text-[#94a3b8] hover:text-[#f1f5f9] border border-[#1e2638]'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredClasses.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-[#0e121b] border border-[#1e2638] rounded-[0.375rem] hover:border-[#00f0ff]/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                      {item.sport} · {item.intensity}
                    </span>
                    <span
                      className={`text-[11px] font-mono ${
                        item.slotsAvailable > 0 ? 'text-[#10b981]' : 'text-[#ef4444]'
                      }`}
                    >
                      {item.slotsAvailable > 0 ? `${item.slotsAvailable} spots open` : 'Fully Booked'}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-[#f1f5f9] font-['Space_Grotesk']">
                    {item.name}
                  </h4>

                  <div className="space-y-1 text-xs font-mono text-[#94a3b8] pt-1">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#64748b]" />
                      <span>{item.coach}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#64748b]" />
                      <span>{item.time} ({item.duration})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                      <span>{item.court}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1e2638] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#64748b]">Free Training Session</span>
                  <button
                    disabled={item.slotsAvailable === 0}
                    onClick={() => handleOpenBooking(item)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-[0.25rem] transition-all flex items-center gap-1 cursor-pointer ${
                      item.slotsAvailable > 0
                        ? 'bg-[#00f0ff] text-[#05070a] font-semibold hover:bg-[#7df4ff]'
                        : 'bg-[#1e2638] text-[#64748b] cursor-not-allowed'
                    }`}
                  >
                    <span>{item.slotsAvailable > 0 ? 'Book Class' : 'Waitlist'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Booking Drawer / Form */}
          {selectedClassForBooking && (
            <div className="mt-6 p-5 bg-[#05070a] border border-[#00f0ff]/50 rounded-[0.375rem] space-y-4">
              <div className="flex items-center justify-between border-b border-[#1e2638] pb-3">
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-[#00f0ff]" />
                  <span className="text-sm font-semibold text-[#f1f5f9] font-['Space_Grotesk']">
                    Confirm Training Reservation: {selectedClassForBooking.name}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedClassForBooking(null)}
                  className="text-xs font-mono text-[#64748b] hover:text-[#f1f5f9]"
                >
                  Cancel
                </button>
              </div>

              {!bookingSuccess ? (
                <form onSubmit={handleConfirmBooking} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                      Athlete Name
                    </label>
                    <input
                      type="text"
                      required
                      value={athleteName}
                      onChange={(e) => setAthleteName(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#0b0f17] border border-[#1e2638] rounded-[0.25rem] text-[#f1f5f9] focus:outline-none focus:border-[#00f0ff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={athleteContact}
                      onChange={(e) => setAthleteContact(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#0b0f17] border border-[#1e2638] rounded-[0.25rem] text-[#f1f5f9] focus:outline-none focus:border-[#00f0ff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                      Session Date
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-mono bg-[#0b0f17] border border-[#1e2638] rounded-[0.25rem] text-[#f1f5f9] focus:outline-none focus:border-[#00f0ff]"
                    />
                  </div>

                  <div className="sm:col-span-3 flex items-center justify-between pt-2">
                    <span className="text-xs text-[#94a3b8] font-mono">
                      Location: {selectedClassForBooking.court} ({selectedClassForBooking.time})
                    </span>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-mono font-semibold text-[#05070a] bg-[#00f0ff] rounded-[0.25rem] hover:bg-[#7df4ff] shadow-[0_0_15px_rgba(0,240,255,0.3)] cursor-pointer"
                    >
                      Generate Instant Booking Pass
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-4 bg-[#0b0f17] border border-[#10b981]/50 rounded-[0.25rem] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#10b981]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Registration Confirmed in Supabase DB</span>
                    </div>
                    <p className="text-xs font-mono text-[#cbd5e1]">
                      Pass ID: <strong className="text-[#00f0ff]">{generatedTicketId}</strong> · Athlete: {athleteName} · Date: {bookingDate}
                    </p>
                    <p className="text-[11px] text-[#64748b]">
                      Training court reserved: {selectedClassForBooking.court} with {selectedClassForBooking.coach}.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedClassForBooking(null);
                      setBookingSuccess(false);
                    }}
                    className="px-3.5 py-1.5 text-xs font-mono text-[#f1f5f9] bg-[#131924] border border-[#1e2638] rounded-[0.25rem] hover:border-[#00f0ff] cursor-pointer shrink-0"
                  >
                    Done / Book Another
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#080b11] border-t border-[#1e2638] flex items-center justify-between text-xs font-mono text-[#64748b]">
          <span>Project by Nithish Kumar A</span>
          <button
            onClick={onClose}
            className="hover:text-[#f1f5f9] transition-colors cursor-pointer"
          >
            Close Interactive Simulator [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};

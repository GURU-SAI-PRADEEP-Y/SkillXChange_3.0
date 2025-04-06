import React, { useEffect, useState } from 'react';
import { X, Mail } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Button } from '../Button';
import { TimeSlotButton } from './TimeSlotButton';
import { sendBookingEmails } from '../../utils/email';

interface TimeSlot {
  id: string;
  start_time: string;
  end_time: string;
}

interface BookingModalProps {
  mentorId: string;
  onClose: () => void;
  onBookingComplete: () => void;
  gigTitle: string;
}

export function BookingModal({ mentorId, onClose, onBookingComplete, gigTitle }: BookingModalProps) {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingInProgress, setBookingInProgress] = useState(false);
  const [bookingSlotId, setBookingSlotId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [mentorEmail, setMentorEmail] = useState<string>('');

  useEffect(() => {
    loadAvailableSlots();
    loadMentorEmail();
  }, [mentorId]);

  const loadMentorEmail = async () => {
    try {
      const { data, error } = await supabase
        .from('mentor_profiles')
        .select('email')
        .eq('id', mentorId)
        .single();

      if (error) throw error;
      if (data) {
        setMentorEmail(data.email);
      }
    } catch (error) {
      console.error('Error loading mentor email:', error);
    }
  };

  const loadAvailableSlots = async () => {
    try {
      const { data, error } = await supabase
        .from('time_slots')
        .select('*')
        .eq('mentor_id', mentorId)
        .eq('is_booked', false)
        .gte('start_time', new Date().toISOString())
        .order('start_time', { ascending: true });

      if (error) throw error;
      setSlots(data || []);
    } catch (error) {
      console.error('Error loading slots:', error);
      setError('Failed to load available time slots');
    } finally {
      setLoading(false);
    }
  };

  const bookSlot = async (slotId: string, startTime: string) => {
    // Show the temporary message instead of processing the booking
    setError('');
    return (
      <div className="rounded-md bg-blue-50 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Mail className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Booking System Update
            </h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                We're currently working on improving our booking system.
                In the meantime, please reach out to us via email to schedule your session.
              </p>
              {mentorEmail && (
                <p className="mt-2">
                  Contact mentor at: <a href={`mailto:${mentorEmail}`} className="font-medium underline">{mentorEmail}</a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Available Time Slots</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="rounded-md bg-blue-50 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Mail className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Booking System Update
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    We're currently working on improving our booking system.
                    In the meantime, please reach out to us via email to schedule your session.
                  </p>
                  {mentorEmail && (
                    <p className="mt-2">
                      Contact mentor at: <a href={`mailto:${mentorEmail}`} className="font-medium underline">{mentorEmail}</a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-4">Loading available slots...</div>
          ) : slots.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No available time slots
            </div>
          ) : (
            <div className="space-y-3">
              {slots.map((slot) => (
                <TimeSlotButton
                  key={slot.id}
                  startTime={slot.start_time}
                  endTime={slot.end_time}
                  onBook={() => bookSlot(slot.id, slot.start_time)}
                  isLoading={bookingInProgress && bookingSlotId === slot.id}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t">
          <Button variant="secondary" onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
import { Dumbbell, HeartPulse, Flame, Users, StretchHorizontal, Timer } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

export const PROGRAMMES = [
  { icon: Dumbbell, title: "Strength Training", text: "Structured barbell and free-weight sessions to build strength with good technique." },
  { icon: Flame, title: "HIIT Conditioning", text: "Short, high-intensity intervals designed to improve fitness and endurance." },
  { icon: HeartPulse, title: "Cardio Zone", text: "Treadmills, rowers and bikes for steady-state and interval cardio work." },
  { icon: Users, title: "Group Classes", text: "Coach-led classes for all levels, from beginner circuits to advanced sessions." },
  { icon: StretchHorizontal, title: "Mobility & Recovery", text: "Stretching and mobility sessions to help you move better and recover well." },
  { icon: Timer, title: "Personal Training", text: "One-to-one coaching with a plan built around your goals and schedule." },
];

export const BENEFITS = [
  "Modern equipment across dedicated zones",
  "Coached sessions for every experience level",
  "Flexible memberships with no long forms",
  "Changing rooms and lockers on site",
];

// Example prices — replace with your real pricing.
export const PLANS = [
  { name: "Basic", price: 29, features: ["Gym floor access", "Off-peak hours", "Locker access"], featured: false },
  { name: "Standard", price: 45, features: ["Full opening hours", "Unlimited group classes", "Induction session"], featured: true },
  { name: "Premium", price: 69, features: ["Everything in Standard", "2 PT sessions per month", "Personal programme"], featured: false },
];

// Placeholder trainer profiles — replace names and bios with your real team.
export const TRAINERS = [
  { img: t1, name: "[Trainer Name]", role: "Strength & Conditioning", bio: "Placeholder bio. Describe this coach's specialisms and coaching style." },
  { img: t2, name: "[Trainer Name]", role: "Powerlifting Coach", bio: "Placeholder bio. Describe this coach's specialisms and coaching style." },
  { img: t3, name: "[Trainer Name]", role: "Mobility & Yoga", bio: "Placeholder bio. Describe this coach's specialisms and coaching style." },
];

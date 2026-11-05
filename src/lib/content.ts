import { Dumbbell, HeartPulse, Flame, Users, StretchHorizontal, Timer } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/ethan-brooks.jpg";

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

// Example prices in INR — replace with your real pricing.
export const PLANS = [
  { name: "Basic", price: 1499, features: ["Gym floor access", "Off-peak hours", "Locker access"], featured: false },
  { name: "Standard", price: 2499, features: ["Full opening hours", "Unlimited group classes", "Induction session"], featured: true },
  { name: "Premium", price: 3999, features: ["Everything in Standard", "2 PT sessions per month", "Personal programme"], featured: false },
];

// Fictional demonstration profiles, not real employees or credentials.
export const TRAINERS = [
  { img: t1, name: "Alex Morgan", role: "Head Strength & Conditioning Coach", bio: "Specialises in progressive strength development, structured resistance training and helping members build consistent, sustainable training habits." },
  { img: t2, name: "Ryan Carter", role: "Personal Fitness Trainer", bio: "Focuses on personalised workout programmes, proper exercise techniques and helping members improve their overall fitness through structured training." },
  { img: t3, name: "Ethan Brooks", role: "Functional Fitness Coach", bio: "Specialises in functional movement, conditioning, mobility and developing practical strength for everyday performance." },
];

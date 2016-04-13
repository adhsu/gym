// Steve Cook Back and Biceps Workout 
// https://www.youtube.com/watch?v=5Y2D5ODJJnE

const backBiRoutine = [
  {
    id: 0,
    machine: "Pullup and Dip Station 1",
    name: "Wide-Grip Pullup",
    description: "4 sets, 10 reps to failure",
    tips: [
      "Hands spaced wider than shoulder width",
      "Curve lower back, stick chest out",
      "Pull until bar touches your upper chest",
      "Focus on squeezing back muscles at the top"],
    sets: [
      {reps: 10, weight: 0, bodyweight: true, completed: false, rest: 60},
      {reps: 10, weight: 0, bodyweight: true, completed: false, rest: 60},
      {reps: 10, weight: 0, bodyweight: true, completed: false, rest: 60},
      {reps: 10, weight: 0, bodyweight: true, completed: false, rest: 60},
      {reps: 10, weight: 0, bodyweight: true, completed: false},
    ],
    completed: false
  },
  {
    id: 1,
    machine: "Bumper Station 1",
    name: "Bent-Over Long Bar Row",
    description: "3 sets, last set drop set",
    tips: [
      "Torso close to parallel with floor, bend knees slightly",
      "Keep your elbows in and squeeze your back",
      "Lower slowly all the way down and stretch the lats"],
    sets: [
      {reps: 10, weight: 45, completed: false, rest: 30, rest: 90},
      {reps: 10, weight: 90, completed: false, rest: 30, rest: 90},
      {reps: 10, weight: 115, completed: false},
    ],
    completed: false
  },
  {
    id: 2,
    machine: "Pulldown Station 1",
    name: "Close Grip Pulldown",
    description: "3 sets, 10-12 reps",
    tips: [
      "Close grip - hands closer than shulder width",
      "Curve lower back and stick your chest out",
      "Pull to your upper chest and squeeze your back"
    ],
    sets: [
      {reps: 10, weight: 95, completed: false, rest: 90},
      {reps: 10, weight: 95, completed: false, rest: 90},
      {reps: 10, weight: 95, completed: false}
    ],
    completed: false
  },
  {
    id: 3,
    machine: "Free Weight Station 5",
    name: "Dumbbell Single Arm Row",
    description: "3 sets 10 reps",
    tips: [
      "Upper body parallel to floor",
      "Keep your upper arm close to your side and torso stationary",
      "Squeeze your back muscles - your arms should do no work."],
    sets: [
      {reps: 10, weight: 50, completed: false, rest: 90},
      {reps: 10, weight: 50, completed: false, rest: 90},
      {reps: 10, weight: 50, completed: false}
    ],
    completed: false
  },
  {
    id: 4,
    machine: "Cable Machine 1",
    name: "Straight-Arm Rope Pulldown",
    description: "5 sets 15 reps",
    tips: [
      "Keep your back straight",
      "Keep your arms straight",
      "Squeeze with your lats"],
    sets: [
      {reps: 15, weight: 40, completed: false, rest: 90},
      {reps: 15, weight: 40, completed: false, rest: 90},
      {reps: 15, weight: 40, completed: false, rest: 90},
      {reps: 15, weight: 40, completed: false, rest: 90},
      {reps: 15, weight: 40, completed: false}
    ],
    completed: false
  },
  {
    id: 5,
    machine: "Free Weight Station 5",
    name: "EZ-Bar Curl",
    description: "First 2 sets strict, second 2 sets cheat",
    tips: [
      "Keep your upper arms stationary",
      "Squeeze your contracted biceps at the top"
    ],
    sets: [
      {reps: 12, weight: 40, completed: false, rest: 90},
      {reps: 10, weight: 50, completed: false, rest: 90},
      {reps: 6, weight: 60, completed: false, rest: 90},
      {reps: 4, weight: 70, completed: false}
    ],
    completed: false
  },
  {
    id: 6,
    machine: "Free Weight Station 5",
    name: "Incline Dumbbell Curl",
    description: "1 minute long sets",
    tips: [
      "Palms facing forward",
      "Keep the upper arms stationary",
      "Only move your forearms"
    ],
    sets: [
      {reps: 10, weight: 25, completed: false, rest: 90},
      {reps: 10, weight: 25, completed: false, rest: 90},
      {reps: 10, weight: 25, completed: false, rest: 90},
      {reps: 10, weight: 25, completed: false, rest: 90}
    ],
    completed: false
  },
  {
    id: 7,
    machine: "Preacher Curl Machine",
    name: "Spider Curl",
    description: "2 sets to failure! Try for at least 10",
    tips: [
      "Stretch your bicep at the bottom",
      "Squeeze at the top for a second before lowering!"],
    sets: [
      {reps: 10, weight: 40, completed: false, note: "To failure!", rest: 90},
      {reps: 10, weight: 40, completed: false, note: "To failure!"}
    ],
    completed: false
  },
  {
    id: 8,
    machine: "Free Weight Station 5",
    name: "Dumbbell Hammer Curl",
    description: "2 sets to failure! Try for at least 10",
    tips: [
      "Palms should be facing your torso",
      "Hold the contracted position for a second and squeeze your biceps"],
    sets: [
      {reps: 10, weight: 25, completed: false, note: "To failure!", rest: 90},
      {reps: 10, weight: 25, completed: false, note: "To failure!"}
    ],
    completed: false
  }
]

export default backBiRoutine

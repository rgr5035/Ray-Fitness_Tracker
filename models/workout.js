const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {

        type: {
            type: String, 
            trim: true,
            required: "Please enter an exercise type"
            },

        name: {
            type: String, 
            trim: true,
            required: "Please enter a workout name"
        },

        duration: {
            type: Number, 
            required: "Please enter the duration in minutes"
        },

        distance: {
            type: Number,
        },

        weight: {
            type: Number,
            // required: true  
        },

        reps: {
            type: Number, 
            // required: true
        },

        sets: {
            type: Number, 
            // required: true
        },
        
        }]
},
{
    toJSON: {
        virtuals: true
    }
},
);

WorkoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise)=> {
        return total + exercise.duration;
    }, 0)
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports =  Workout  ;
'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// if (navigator.geolocation) console.log('hey');
// navigator.geolocation.getCurrentPosition(
//   position => {
//     console.log('good');
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const link = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
//     console.log(link);
//   },
//   function () {
//     alert('Oops somethong wrong');
//   }
// );

navigator.geolocation.getCurrentPosition(position => {
  console.log(position);
});

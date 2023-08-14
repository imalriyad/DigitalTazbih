// // subhanAllah card

let subhanAllahDisplaValue = document.getElementById('subhanAllah-Display-value')
let subhanAllahIncriment = document.getElementById('subhanAllah-incriment')
let subhanAllahDecriment = document.getElementById('subhanAllah-decriment')

// incriemnt
let subhanAllahIntialValue = 0
subhanAllahIncriment.addEventListener('click',function(){
    if (subhanAllahDisplaValue.innerText == 33){
        return alert('Now Complete the next Task!')
     }
     subhanAllahIntialValue += 1
     subhanAllahDisplaValue.innerText = subhanAllahIntialValue
})

// Decriment
subhanAllahDecriment.addEventListener('click',function(){
   if (subhanAllahIntialValue === 0) {
    return alert("You can't add negative value!")
  }
    subhanAllahIntialValue -= 1
    subhanAllahDisplaValue.innerText = subhanAllahIntialValue
})

// Alhamdulillah Card

let alhamdulillahDisplaValue = document.getElementById('alhamdulillah-Display-value')
let alhamdulillahIncriment = document.getElementById('alhamdulillah-incriment')
let alhamdulillahDecriment = document.getElementById('alhamdulillah-decriment')

// Incriment
let alhamdulillahintialValue = 0
alhamdulillahIncriment.addEventListener('click',function(){
    if (alhamdulillahintialValue === 33) {
        return alert('Now Complete the next Task!')
    }
    alhamdulillahintialValue += 1
    alhamdulillahDisplaValue.innerText = alhamdulillahintialValue
})

// Decriment
alhamdulillahDecriment.addEventListener('click',function(){
    if (alhamdulillahintialValue === 0) {
        return alert("You can't add negative value!")
      }
    alhamdulillahintialValue -= 1
    alhamdulillahDisplaValue.innerText = alhamdulillahintialValue
})

// Allahu Akbar Card

let allahuAkbarDisplayValue = document.getElementById('allahuAkbar-Display-value')
let allahuAkbarIncriment = document.getElementById('allahuAkbar-incriment')
let allahuAkbarDecriment = document.getElementById('allahuAkbar-decriment')

// Incriment
let allahuAkbarInitialValue = 0
allahuAkbarIncriment.addEventListener('click',function(){
    if (allahuAkbarInitialValue === 33) {
        return alert('Now Complete the first Task!')
    }
  allahuAkbarInitialValue += 1
  allahuAkbarDisplayValue.innerText = allahuAkbarInitialValue

})

// Decrement
allahuAkbarDecriment.addEventListener('click',function(){
    if (allahuAkbarInitialValue === 0) {
        return alert("You can't add negative value!")
      }
    allahuAkbarInitialValue -= 1
    allahuAkbarDisplayValue.innerText = allahuAkbarInitialValue
})


// Reset Button
document.getElementById('rest-btn').addEventListener('click',function(){
    subhanAllahDisplaValue.innerText = 0
    alhamdulillahDisplaValue.innerText = 0
    allahuAkbarDisplayValue.innerText = 0
   
})
let $ = document
const emailField = $.getElementById('emailField')
const passwordField = $.getElementById('passwordField')
const loginBtn  = $.getElementById('loginBtn')
let aBtn = $.querySelectorAll('a')

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
aBtn.forEach((btn) => {
    btn.addEventListener('click' , () => {
        Toast.fire({
            title:'We are sorry, This section is updating',
            icon: 'error'
        })
    })
})
window.addEventListener('load' , () => {
    Swal.fire({
        title: ' Back To Home Page Way',
        text: 'For back to home page press H button on your keyboard or click home sign in screen',
        icon: 'info',
        timer: 10000
    })
})

$.body.addEventListener('keydown' , (ev) => {
    if(ev.which === 13){
        loginValidation()
    }
    if(ev.which === 72){
        Toast.fire({
            title: 'You are redirecting to home page soon',
            icon: 'info'
        })
        setTimeout(() => {
            window.location = './index.html'
        },3000)
    }
})

loginBtn.addEventListener('click' , () => {
    loginValidation()
})

function loginValidation() {
    if(emailField.value === 'en.mohammadhosein@gmail.com' | emailField.value === '@Hosein13791379'){
        Toast.fire({
            title:'Success, Wait For Going To Your Dashboard',
            icon: 'success'
        })
    }else {
        Toast.fire({
            title:'Your Entered Value Are Not Correct!',
            icon: 'error'
        })
    }
}

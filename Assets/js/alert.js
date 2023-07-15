const $ = document
let swAlert = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger me-3'
      },
    buttonsStyling: false
})

$.body.addEventListener('keydown' , (e) => {
    if (e.keyCode === 76) {
      swAlert.fire({
        icon: 'success',
        title: 'L Button Is Clicked',
        text: 'You Will Redirect To Login Page. Please Wait',
        showConfirmButton: false,
      })
      setTimeout(()=>{
        window.location = './login.html'
      },3000)
    }
    if (e.keyCode === 83) {
      swAlert.fire({
        icon: 'success',
        title: 'S Button Is Clicked',
        text: 'You Will Redirect To Register Page. Please Wait',
        showConfirmButton: false,
      })
      setTimeout(()=>{
        window.location = './Pages/Sign/index.html'
      },3000)
    }
    if (e.keyCode === 81) {
      swAlert.fire({
        title: 'Q Button Is Clicked',
        text: "Are yoy sure to close site?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, close it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swAlert.fire({
            title:'Site will close soon',
            text: 'Please wait',
            icon: 'success',
          });
          window.close();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swAlert.fire({
            title: 'Cancelled',
            text: 'You are still on my site',
            icon: 'info',
          })
        }
      })
    }
  })

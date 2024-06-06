import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css',
})
export class WhatsappComponent implements OnInit {
  ngOnInit(): void {
    console.log('HOLA');
  }
  // public showPopup: boolean = false
  // public contacts = [
  //     {
  //         name: 'José David',
  //         phone: '+59168660938',
  //         rol: 'Agente de ventas',
  //     },
  //     {
  //         name: 'Roxana Loayza',
  //         phone: '+59168660484',
  //         rol: 'Agente de ventas',
  //     },
  //     {
  //         name: 'Daniel Fernández',
  //         phone: '+59168660443',
  //         rol: 'Agente de ventas',
  //     },
  // ]
  // function togglePopup  () :void {
  //     showPopup = !showPopup
  // }
  // function closePopup  ():void {
  //     showPopup = false
  // }
  // function handleClickOutside  (event:any) :void {
  //     if (!event.target.closest('.fixed')) {
  //         closePopup()
  //     }
  // }
  // function scrollToTop  () :void {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth',
  //     })
  // }
  // onMounted(() => {
  //     document.addEventListener('click', handleClickOutside)
  // })
}

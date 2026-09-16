const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
document.addEventListener('keydown', e => {if(e.key === 'Escape' && nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
const form = document.querySelector('#inquiry');
if(form){
 const service = new URLSearchParams(location.search).get('service');
 if(service !== null && /^\d$/.test(service) && Number(service)<6) document.querySelector('#service').selectedIndex = Number(service)+1;
 form.addEventListener('submit', e => {
 e.preventDefault();
 if(!form.reportValidity())return;
 const fields = [...new FormData(form)].map(([key,val]) => `${key}: ${String(val).trim()}`).join('\n\n');
 const blob = new Blob(['D.BROWN GLOBAL TALENT TECH LTD\nENQUIRY DRAFT — NOT SENT\n\n'+fields],{type:'text/plain;charset=utf-8'});
 const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url;a.download='dbrown-enquiry-draft.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
 document.querySelector('#form-status').textContent='Your enquiry draft is ready to download. It has not been sent. Keep it to share when the company’s contact details are confirmed.';
 });
}

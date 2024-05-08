export const closeMenu = () => {
   const checkbox = document.getElementById('navi-toggle') as HTMLInputElement;
   if (checkbox) {
      checkbox.checked = !checkbox.checked;
   }
};

export const numberPattern = /^[0-9]*$/;
export const formatNumberWithCommas = (value: number) => {
   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

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

export const formatDate = (dateStr: string, lang: string) => {
   const date = new Date(dateStr);

   if (isNaN(date.getTime())) {
      return 'Invalid Date';
   }
   return new Intl.DateTimeFormat(lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
   }).format(new Date(date));
};

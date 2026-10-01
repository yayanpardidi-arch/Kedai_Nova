document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (even) => {
        let parent = even.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let title = parent.querySelector('.card-text').innerHTML;
        let info = parent.querySelector('.deskripsi').innerHTML;

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = title;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalimage').innerHTML ='';
        document.querySelector('.modalimage').appendChild(image);
        document.querySelector('.modalinfo').innerHTML =info;
        document.querySelector('.modalHarga').innerHTML =harga;

        const nowa = '6282226101584';
        let pesan = `https://api.whatsapp.com/send?phone=${nowa}&text=halo kak, mo order ${gambar}`;

        document.querySelector('.btnBeli').href = pesan;
    });
});
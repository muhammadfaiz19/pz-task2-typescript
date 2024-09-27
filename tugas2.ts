// Informasi tentang pahlawan
let namaPahlawan: string = "Arion";
let umurPahlawan: number = 30;
let siapBertarung: boolean = true;

// Sumber Daya Kerajaan
let jumlahEmas: number = 5000;
let persediaanMakanan: number = 120;
let jumlahPrajurit: number = 200;


// Petualangan Pahlawan
let emasDariPetualangan: number = 1500;
let xpDariPetualangan: number = 75;

// Fungsi untuk menambahkan emas kerajaan
function tambahEmas(jumlahEmas: number, emasDariPetualangan: number): number {
  return jumlahEmas + emasDariPetualangan;
}
console.log(tambahEmas(jumlahEmas, emasDariPetualangan));

// Fungsi untuk mengurangi kesehatan
function kurangiKesehatan(
    jumlahPrajurit: number,
    jumlahPoinKesehatan: number
  ): number {
    let kesehatanPrajurit: number = 100;
    let totalKesehatan = kesehatanPrajurit - jumlahPoinKesehatan;
    if (totalKesehatan == 0) {
      console.log("Prajurit tidak bisa bertarung!");
    } else {
      console.log("Jumlah Prajurit : " + jumlahPrajurit);
      console.log("Total Kesehatan Setelah Dikurangi: " + totalKesehatan);
    }
    return totalKesehatan;
  }
  kurangiKesehatan(200, 10);


// Fungsi untuk menampilkan rangkuman misi
function rangkumanMisi() {
  console.log("Rangkuman Misi Arion : ");
  console.log("Nama Pahlawan : " + namaPahlawan);
  console.log("Emas Yang Dikumpulkan : " + emasDariPetualangan);
  console.log("Poin Pengalaman Yang Didapat : " + xpDariPetualangan);
}

rangkumanMisi();

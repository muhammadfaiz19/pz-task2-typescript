let fullName: string = "Muhammad Faiz";
let age: number = 20;
let height: number = 170;
let weight: number = 55;
let city: string = "Cirebon";
let country: string = "Indonesia";
let isMarried: boolean = false;
let isEmployed: boolean = false;
let isLikesCoding: boolean = true;
let isLikesDarkMode: boolean = true;
let isLikesMusic: boolean = true;
let isStudent: boolean = true;
let campusName: string = "Universitas Muhammadiyah Cirebon";
let bestFriendName: string = "Farhan";
let favoriteFootballClub: string = "FC Barcelona";
let favoriteColor: string = "Blue";
let favoriteFood: string = "Mie Ayam";
let favoriteMovie: string = "Fast & furious";
let favoriteSong: string = "Saatnya Kesempatan - JKT48";
let favoriteQuote: string = "Mulai Aja Dulu Baru Belajar.";
let numberOfPets: number = 2;
let isWorking: boolean = false;
let isStudying: boolean = true;
let projectTitle: string = "pz-task2-typescript";
let currentCalendarYear: number = 2024;

// untuk menampilkan data
console.log("Full Name: " + fullName);
console.log("Age: " + age);
console.log("Height: " + height + " cm");
console.log("Weight: " + weight + " kg");
console.log("City: " + city);
console.log("Country: " + country);
console.log("Is Married?: " + isMarried);
console.log("Is Employed?: " + isEmployed);
console.log("Is Likes Coding?: " + isLikesCoding);
console.log("Is Likes Dark Mode?: " + isLikesDarkMode);
console.log("Is Likes Music?: " + isLikesMusic);
console.log("Is Student?: " + isStudent);
console.log("Campus Name: " + campusName);
console.log("Best Friend Name: " + bestFriendName);
console.log("Favorite Football Club: " + favoriteFootballClub);
console.log("Favorite Color: " + favoriteColor);
console.log("Favorite Food: " + favoriteFood);
console.log("Favorite Movie: " + favoriteMovie);
console.log("Favorite Song: " + favoriteSong);
console.log("Number of Pets: " + numberOfPets);
console.log("Is Working?: " + isWorking);
console.log("Is Studying?: " + isStudying);
console.log("Favorite Quote: " + favoriteQuote);
console.log("Project Title: " + projectTitle);
console.log("Current Calendar Year: " + currentCalendarYear);

// fungsi untuk perjumlahan
function add(x: number, y: number): number {
  return x + y;
}

// fungsi untuk pengurangan
function subtract(x: number, y: number): number {
  return x - y;
}

// fungsi untuk perkalian
function multiply(x: number, y: number): number {
  return x * y;
}

// fungsi untuk pembagian
function devide(x: number, y: number): number {
  return x / y;
}

// pemanggilan fungsi
console.log("Hasil perjumlahan dari 10 + 4 = ", add(10, 4));
console.log("Hasil pengurangan dari 10 - 5 = ", subtract(10, 5));
console.log("Hasil perkalian dari 5 * 10 = ", multiply(5, 10));
console.log("Hasil pembagian dari 20 / 2 = ", devide(20, 2));

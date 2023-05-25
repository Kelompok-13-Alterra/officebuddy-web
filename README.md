# **Office Buddy Dekstop**

## **Cloning Repository**

- `git clone` https://github.com/Kelompok-13-Alterra/officebuddy-web.git
- `npm install`
- `npm run dev`

## **Create New Branch**

- pastikan sudah berada pada branch `development`
- git pull `origin development`
- npm `install` (untuk menginstall package terbaru dari branch `development`)
- git checkout -b `feat/nama-features`
- sebelum melakukan `push` ke github pastikan untuk melakukan git pull `origin development` lagi
- git push branch yang sudah dibuat tadi (pastikan sudah berada di branchnya)

## **Merge & Pull Request**

- Klik `compare & pull request `di halaman repository github kita
- Pastikan base kita menuju `base: development`
- Dan untuk compare kita menuju branch codingan yang kita buat
  - ex: `compare: feat/lading-page`
- Klik `Create pull request` jika base dan compare sudah benar
- infokan member lain untuk melakukan review (`QE dan REACT`)
- Jika tidak ada conflict dan lolos review lakukan `merge pull request`

## **Naming Conventions/Rules**

- untuk penamaan class pada CSS vanilla menggunakan format `BEM` (Blocks, Elements and Modifiers)
  - ex:
  ```html
  <div className="landing">
    <h1 className="landing__title">Ini Title</h1>
    <h1 className="landing__desc">Ini Descriptions</h1>
  </div>
  ```
- untuk penamaan component react menggunakan format `Pascal`
  - ex: `IniComponent.jsx`
- untuk penamaan branch `feat/nama-features`
  - ex : feat/landing-page
- untuk penamaan commit `feat[nama-features]: commit message`
  - ex : feat[landing-page]: add CTA

## **Descriptions**

- `feat`: digunakan saat ingin membuat fitur baru
  - ex : `feat[landing-page]: add CTA`
- `refactor`: digunakan saat ingin memperbaiki code
  - ex : `refactor[landing-page]: memperbaiki syntax CTA`
- `fix` : digunakan saat ingin melakukan fixing bug/error
  - ex : `fix[landing-page]: fixing ... error`
- `chore`: digunakan saat ingin melakukan modify atau menambahkan package
  - ex : `chore: adding ... package`
- `docs` : digunakan saat ini melakukan modify atau menambahkan dokumentasi
  - ex : `docs[Readme]: adding descriptions`
- `style` : digunakan saat ini melakukan modify tampilan/style
  - ex : `style[landing-page]: change text color`

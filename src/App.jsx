import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {

  return (
    <>
      {/* hero */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <q> Life is a beautifull mess. ✨</q>
          </div>
          <h1 className="text-6xl/tight font-bold mb-6">Hi, I Am Rahmanda Trinova Putra</h1>
          <p className="text-base/loose mb-6 opacity-60">
            Saya mempunyai ketertarikan dalam bidang Programming dan Designer, terutama pada pembuatan Website dan Desain seperti Poster, Pamflet serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih dari 4 Tahun untuk semua Bidang.
          </p>
          <div className="flex items-center sm:gap-4 gap-2 mt-6">
            <a href={"/assets/MyCv.pdf"} className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Curiculum Vitae <i className="ri-search-eye-line ri-lg"></i></a>
            <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-folder-open-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" loading="lazy"/>
      </div>
      {/* hero */}

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h1 className="text-4xl/snug font-bold mb-4 text-center">About Me</h1>
          <p className="text-base/loose text-center">
            I am a graduated of the Software Engineer major with experience in Full-stack development, Front-End development and UI/UX Design, I have worked on various academic projects and internship invloving technologied such as HTML PHP, Laravel, UI/UX Design MySQL and PostgreSQL. I am interested in Computer Programming and related stuff. I have good communication skill, hard worker, able to work individual or group and fast learner.
          </p>
        </div>
        {/* tentang */}

        {/* tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang di pakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-60" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa tools yang saya pakai untuk pengembangan Website ataupun Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tool => (
              <div key={tool.id} className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}                
          </div>
        </div>
      </div>
      {/* tools */}

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-60" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut adalah beberapa proyek yang pernah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p key={index} className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">{tool}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* proyek */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose mb-4 text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berhubung dengan saya</p>
        <form action="https://formsubmit.co/caphtseazer@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama Anda" className="border border-zinc-500 p-2 rounded-b-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email Anda" className="border border-zinc-500 p-2 rounded-b-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-b-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}
    </>
  )
}

export default App

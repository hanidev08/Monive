// هنا ضع أي imports لصور أو ملفات ثقيلة عشان تتحمل مسبقًا
import "@/public/assets/image3.png";
import "@/public/assets/image1.png";
// مثال: تحميل سكريبتات أو بيانات
// import someData from "@/lib/someData";

export default function preload() {
  return Promise.resolve(true);
}

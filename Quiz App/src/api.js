import axios from "axios";

// Tüm quiz verileri
const quizData = [
  // ASP.NET Soruları
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Core uygulamalarında veri erişimi için hangi ORM kullanılır?",
    options: ["Entity Framework", "Dapper", "NHibernate", "ADO.NET"],
    correctAnswer: "Entity Framework",
  },
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Core'da `appsettings.json` dosyası ne amaçla kullanılır?",
    options: [
      "Uygulama konfigürasyon ayarlarını saklamak",
      "Veri tabanı bağlantı ayarlarını saklamak",
      "Kullanıcı kimlik doğrulama bilgilerini saklamak",
      "Sadece uygulama içi geçici verileri saklamak",
    ],
    correctAnswer: "Uygulama konfigürasyon ayarlarını saklamak",
  },
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Core'da `Startup` sınıfının `Configure` metodunun rolü nedir?",
    options: [
      "Uygulama yapılandırmasını belirlemek",
      "Veri tabanı bağlantısını yapılandırmak",
      "HTTP isteklerini işlemek",
      "Middleware bileşenlerini yapılandırmak",
    ],
    correctAnswer: "Middleware bileşenlerini yapılandırmak",
  },
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Core'da bir endpoint'e nasıl erişim kısıtlaması getirilir?",
    options: ["Authorization Attribute", "Middleware", "Routing", "Session"],
    correctAnswer: "Authorization Attribute",
  },
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Core'da bir Razor sayfasında hangi direktif kullanılmaz?",
    options: ["@model", "@page", "@using", "@import"],
    correctAnswer: "@import",
  },
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Core'da bir Razor sayfasında veri nasıl geçirirsiniz?",
    options: ["ViewData", "ViewBag", "TempData", "Model"],
    correctAnswer: "Model",
  },
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Core'da hangi middleware HTTP isteklerini işleyebilir?",
    options: ["Static Files", "Routing", "Authentication", "Authorization"],
    correctAnswer: "Routing",
  },
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Core'da hangi yapılandırma yöntemi kullanılarak ortam değişkenlerine erişilir?",
    options: [
      "Environment Variables",
      "Configuration Settings",
      "Command Line Arguments",
      "App Settings",
    ],
    correctAnswer: "Environment Variables",
  },
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Core'da hangi yöntem ile veritabanı bağlantı dizesi yapılandırılır?",
    options: [
      "appsettings.json",
      "Web.config",
      "Startup.cs içinde ConfigureServices",
      "Program.cs içinde Main metodunda",
    ],
    correctAnswer: "appsettings.json",
  },
  {
    category: "ASP.NET",
    questionText: "ASP.NET MVC'de bir Controller'ı nasıl tanımlarsınız?",
    options: [
      "public class MyController : Controller",
      "public class MyController : IActionResult",
      "public class MyController : ViewResult",
      "public class MyController : Service",
    ],
    correctAnswer: "public class MyController : Controller",
  },
  {
    category: "ASP.NET",
    questionText: "ASP.NET MVC'de bir ViewModel nedir?",
    options: [
      "Veri transferi için kullanılan sınıf",
      "Bir veri tabanı tablosu",
      "Bir kontrolcü sınıfı",
      "Bir razor view dosyası",
    ],
    correctAnswer: "Veri transferi için kullanılan sınıf",
  },
  {
    category: "ASP.NET",
    questionText:
      "ASP.NET Web API'de bir endpoint'e veri göndermek için hangi HTTP metodu kullanılır?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctAnswer: "POST",
  },
  {
    category: "ASP.NET",
    questionText: "ASP.NET Web API'de bir endpoint'i nasıl oluşturursunuz?",
    options: [
      '[Route("api/[controller]")] [HttpGet] public IActionResult Get() { ... }',
      '[HttpPost] [Route("api/[controller]")] public IActionResult Post() { ... }',
      "[HttpGet] public ActionResult Get() { ... }",
      '[HttpPut] [Route("api/[controller]")] public void Put() { ... }',
    ],
    correctAnswer:
      '[Route("api/[controller]")] [HttpGet] public IActionResult Get() { ... }',
  },

  // Java Soruları
  {
    category: "Java",
    questionText: "Java'da `HashMap` sınıfı hangi tür koleksiyonu temsil eder?",
    options: [
      "Anahtar-değer çiftleri",
      "Sıralı öğeler",
      "Tekrar eden öğeler",
      "Sırasız öğeler",
    ],
    correctAnswer: "Anahtar-değer çiftleri",
  },
  {
    category: "Java",
    questionText: "Java'da `List` arayüzü hangi koleksiyon türünü temsil eder?",
    options: [
      "Sıralı ve tekrar eden öğeler",
      "Sırasız ve tekrar eden öğeler",
      "Sıralı ve benzersiz öğeler",
      "Sırasız ve benzersiz öğeler",
    ],
    correctAnswer: "Sıralı ve tekrar eden öğeler",
  },
  {
    category: "Java",
    questionText:
      "Java'da `String` sınıfının değişmez olduğunu belirten anahtar kelime nedir?",
    options: ["`final`", "`immutable`", "`const`", "`static`"],
    correctAnswer: "`final`",
  },
  {
    category: "Java",
    questionText: "Java'da `try-catch` bloğu ne amaçla kullanılır?",
    options: [
      "Hataları yakalamak ve işlemek",
      "Kodun performansını artırmak",
      "Veri tabanı bağlantısı sağlamak",
      "Sınıf mirasını kontrol etmek",
    ],
    correctAnswer: "Hataları yakalamak ve işlemek",
  },
  {
    category: "Java",
    questionText:
      "Java'da bir değişkenin değeri değiştirilemeyecek şekilde tanımlanmasını nasıl sağlarız?",
    options: [
      "`final` anahtar kelimesi ile",
      "`static` anahtar kelimesi ile",
      "`const` anahtar kelimesi ile",
      "`immutable` anahtar kelimesi ile",
    ],
    correctAnswer: "`final` anahtar kelimesi ile",
  },
  {
    category: "Java",
    questionText:
      "Java'da bir metodun aşırı yüklenmesini (overloading) sağlamak için ne yapılmalıdır?",
    options: [
      "Metodun adını değiştirmek",
      "Parametre listesini değiştirmek",
      "Metodun dönüş türünü değiştirmek",
      "Metodun erişim belirleyicisini değiştirmek",
    ],
    correctAnswer: "Parametre listesini değiştirmek",
  },
  {
    category: "Java",
    questionText:
      "Java'da bir nesnenin bellekteki adresini almanın yolu nedir?",
    options: [
      "`System.getMemoryAddress()`",
      "`Object.hashCode()`",
      "`Object.getAddress()`",
      "`System.getAddress()`",
    ],
    correctAnswer: "`Object.hashCode()`",
  },
  {
    category: "Java",
    questionText:
      "Java'da bir sınıfın birden fazla sınıftan türemesi mümkün müdür?",
    options: [
      "Hayır",
      "Evet",
      "Sadece arayüzlerden türeyebilir",
      "Sadece soyut sınıflardan türeyebilir",
    ],
    correctAnswer: "Hayır",
  },
  {
    category: "Java",
    questionText:
      "Java'da bir sınıfın diğer sınıflar tarafından kalıtım yoluyla kullanılmasını nasıl sağlarız?",
    options: [
      "`extends` anahtar kelimesi ile",
      "`implements` anahtar kelimesi ile",
      "`inherits` anahtar kelimesi ile",
      "`uses` anahtar kelimesi ile",
    ],
    correctAnswer: "`extends` anahtar kelimesi ile",
  },
  {
    category: "Java",
    questionText:
      "Java'da bir sınıfın veri üyelerine yalnızca sınıf içinden erişilebilmesini sağlamak için hangi erişim belirleyici kullanılır?",
    options: ["`private`", "`protected`", "`public`", "`default`"],
    correctAnswer: "`private`",
  },
  {
    category: "Java",
    questionText: "Java'da hangi anahtar kelime bir metodu soyut hale getirir?",
    options: ["`abstract`", "`virtual`", "`interface`", "`static`"],
    correctAnswer: "`abstract`",
  },
  {
    category: "Java",
    questionText:
      "Java'da hangi anahtar kelime bir sınıfın örneğini oluşturur?",
    options: ["`new`", "`create`", "`instance`", "`generate`"],
    correctAnswer: "`new`",
  },
  {
    category: "Java",
    questionText:
      "Java'da hangi anahtar kelime sınıf üyeleri arasında veri paylaşımını sağlar?",
    options: ["`static`", "`final`", "`private`", "`protected`"],
    correctAnswer: "`static`",
  },
  {
    category: "Java",
    questionText:
      "Java'da hangi metod nesne oluşturulmadan doğrudan sınıf adıyla çağrılabilir?",
    options: [
      "`static` metod",
      "`final` metod",
      "`abstract` metod",
      "`private` metod",
    ],
    correctAnswer: "`static` metod",
  },
  {
    category: "Java",
    questionText: "Java'da hangi veri türü ondalıklı sayıları temsil eder?",
    options: ["`int`", "`char`", "`boolean`", "`double`"],
    correctAnswer: "`double`",
  },

  // JavaScript Soruları
  {
    category: "JavaScript",
    questionText: "JavaScript'te `null` ve `undefined` arasındaki fark nedir?",
    options: [
      "`null` bir değeri ifade ederken, `undefined` bir değişkenin değerinin atanmadığını ifade eder",
      "`null` ve `undefined` eşdeğerdir",
      "`null` bir tür, `undefined` bir değer türüdür",
      "`null` sadece sayılar için geçerlidir",
    ],
    correctAnswer:
      "`null` bir değeri ifade ederken, `undefined` bir değişkenin değerinin atanmadığını ifade eder",
  },
  {
    category: "JavaScript",
    questionText: "JavaScript'te bir `for` döngüsü nasıl yazılır?",
    options: [
      "`for (let i = 0; i < 10; i++) { }`",
      "`for (let i; i < 10; i++) { }`",
      "`for (i = 0; i < 10; i++) { }`",
      "`for (let i = 0; i < 10; ++i) { }`",
    ],
    correctAnswer: "`for (let i = 0; i < 10; i++) { }`",
  },
  {
    category: "JavaScript",
    questionText: "JavaScript'te bir `map` fonksiyonu nasıl çalışır?",
    options: [
      "Her öğe için bir dönüşüm uygular",
      "Diziyi sıralar",
      "Her öğeyi filtreler",
      "Bir öğeyi bulur ve değiştirir",
    ],
    correctAnswer: "Her öğe için bir dönüşüm uygular",
  },
  {
    category: "JavaScript",
    questionText: "JavaScript'te bir `try-catch` bloğunun amacı nedir?",
    options: [
      "Hataları yakalamak ve işlemek",
      "Kodun performansını artırmak",
      "Nesne oluşturmak",
      "Döngü kontrolü sağlamak",
    ],
    correctAnswer: "Hataları yakalamak ve işlemek",
  },
  {
    category: "JavaScript",
    questionText: "JavaScript'te bir asenkron işlem nasıl başlatılır?",
    options: [
      "`async function`",
      "`await function`",
      "`promise function`",
      "`callback function`",
    ],
    correctAnswer: "`async function`",
  },

  {
    category: "React",
    questionText: "React'te `context` API'si ne amaçla kullanılır?",
    options: [
      "Bileşenler arasında veri paylaşımı",
      "Durum yönetimi",
      "Veri alımı",
      "Olay işleme",
    ],
    correctAnswer: "Bileşenler arasında veri paylaşımı",
  },
  {
    category: "React",
    questionText: "React'te `useCallback` Hook'u ne amaçla kullanılır?",
    options: [
      "Fonksiyonları memoize etmek",
      "Durum güncellemelerini yapar",
      "Yan etkileri yönetir",
      "Veri çekme",
    ],
    correctAnswer: "Fonksiyonları memoize etmek",
  },
  {
    category: "React",
    questionText: "React'te `useEffect` Hook'u ne amaçla kullanılır?",
    options: [
      "Yan etkileri yönetmek",
      "Durum yönetimi yapmak",
      "Veri almak",
      "Olayları dinlemek",
    ],
    correctAnswer: "Yan etkileri yönetmek",
  },
  {
    category: "React",
    questionText: "React'te `useMemo` Hook'u ne amaçla kullanılır?",
    options: [
      "Hesaplamalı değerleri memoize etmek",
      "Fonksiyonları memoize etmek",
      "Durum yönetimi",
      "Yan etkileri yönetmek",
    ],
    correctAnswer: "Hesaplamalı değerleri memoize etmek",
  },
  {
    category: "React",
    questionText: "React'te `useReducer` Hook'u ne amaçla kullanılır?",
    options: [
      "Durum yönetimi",
      "Yan etkileri yönetme",
      "Bağlantı kurma",
      "Hızlı render",
    ],
    correctAnswer: "Durum yönetimi",
  },
  {
    category: "React",
    questionText:
      "React'te bir bileşen (component) içinde bir durum (state) nasıl tanımlanır?",
    options: [
      "`this.state = {}`",
      "`useState({})`",
      "`this.setState({})`",
      "`const state = {}`",
    ],
    correctAnswer: "`useState({})`",
  },
  {
    category: "React",
    questionText:
      "React'te bir bileşen (component) içindeki olay (event) işleyicisi nasıl tanımlanır?",
    options: [
      "`<button onClick={handler}>`",
      "`<button handleClick={handler}>`",
      "`<button onclick={handler}>`",
      "`<button event={handler}>`",
    ],
    correctAnswer: "`<button onClick={handler}>`",
  },
  {
    category: "React",
    questionText:
      "React'te bir bileşen (component) render edildiğinde hangi metot çağrılır?",
    options: [
      "`render()`",
      "`componentDidMount()`",
      "`componentWillUnmount()`",
      "`componentDidUpdate()`",
    ],
    correctAnswer: "`render()`",
  },
  {
    category: "React",
    questionText:
      "React'te bir bileşen (component) tekrar render edilmesini tetikleyen durum nedir?",
    options: [
      "Durum (state) değişikliği",
      "Props değişikliği",
      "Bir üst bileşenden gelen veri değişikliği",
      "Hepsi",
    ],
    correctAnswer: "Hepsi",
  },
  {
    category: "React",
    questionText:
      "React'te bir bileşeni (component) `React.Fragment` ile nasıl sarmalarsınız?",
    options: [
      "`<React.Fragment>...</React.Fragment>`",
      "`<Fragment>...</Fragment>`",
      "`<div>...</div>`",
      "`<section>...</section>`",
    ],
    correctAnswer: "`<React.Fragment>...</React.Fragment>`",
  },
  {
    category: "React",
    questionText:
      "React'te bir bileşeni (component) başka bir bileşenden nasıl çağırırsınız?",
    options: [
      "`<ComponentName />`",
      "`ComponentName()`",
      "`call ComponentName`",
      "`render(ComponentName)`",
    ],
    correctAnswer: "`<ComponentName />`",
  },
  {
    category: "React",
    questionText: "React'te bir bileşeni (component) nasıl tanımlarsınız?",
    options: [
      "`function ComponentName() { }`",
      "`const ComponentName = () => { }`",
      "`class ComponentName extends React.Component { }`",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    category: "React",
    questionText:
      "React'te bir bileşenin (component) `props`'larını nasıl tanımlarsınız?",
    options: [
      "`<ComponentName propName={value} />`",
      "`<ComponentName props={{propName: value}} />`",
      "`<ComponentName attributes={{propName: value}} />`",
      "`<ComponentName data={value} />`",
    ],
    correctAnswer: "`<ComponentName propName={value} />`",
  },
  {
    category: "React",
    questionText:
      "React'te bir bileşenin (component) yaşam döngüsü (lifecycle) aşamaları nelerdir?",
    options: [
      "`mounting`, `updating`, `unmounting`",
      "`initializing`, `rendering`, `destroying`",
      "`creating`, `updating`, `deleting`",
      "`loading`, `rendering`, `unmounting`",
    ],
    correctAnswer: "`mounting`, `updating`, `unmounting`",
  },
  {
    category: "React",
    questionText:
      "React'te bir fonksiyon bileşeninde (function component) hangi Hook kullanılarak durum yönetimi yapılır?",
    options: ["`useState`", "`useEffect`", "`useContext`", "`useReducer`"],
    correctAnswer: "`useState`",
  },
];

// API fonksiyonları
export const fetchQuestionsByCategory = (category) => {
  return quizData.filter((q) => q.category === category);
};

export const getCategories = () => {
  return [...new Set(quizData.map((q) => q.category))];
};

export default quizData;

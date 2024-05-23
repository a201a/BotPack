# BotPack🤖<sub><sub>v1.7.6🚀</sub></sub>
<p align="center">
	<a href="https://nodejs.org/dist/v16.20.0">
		<img src="https://img.shields.io/badge/Nodejs%20Support-18.x-brightgreen.svg?style=flat-square" alt="Nodejs Support v18.x">
	</a>
  <img alt="Size" src="https://img.shields.io/github/repo-size/YANDEVA/BotPack.svg?style=flat-square&label=size">
  <img alt="Version" src="https://img.shields.io/badge/dynamic/json?color=brightgreen&label=code%20version&prefix=v&query=%24.version&url=https://github.com/YANDEVA/BotPack/raw/main/package.json&style=flat-square">
  <img alt="Visitors" src="https://visitor-badge.laobi.icu/badge?style=flat-square&page_id=YANDEVA.BotPack">
</p>
حزمة بسيطة لبدء روبوت دردشة ماسنجر.

<img align="center" src="https://i.ibb.co/gMMvsYf/20240125-225244-0000.png"></a>

### حول

مرحبًا! شكرًا لاستخدامك BotPack! انضم إلينا في [مجتمع روبوت الدردشة المحدودة](https://www.facebook.com/groups/178711334798450/?ref=share)🍪 إذا كنت ترغب في مشاركة واكتشاف أوامر Mirai/BotPack التي أنشأها صانعو الأوامر الآخرون!

> [!ملاحظة]
> - إذا واجهت أي مشاكل أو صعوبات، لا تتردد في التواصل وطلب المساعدة هنا. فريقنا هنا لمساعدتك في أي مشاكل قد تواجهها.

---

### اكتشاف الروبوت
__=>__ هل واجهت هذا النوع من المشاكل على الفيسبوك؟

<img align="center" src="https://i.ibb.co/4SChsvH/facebook.jpg">

ربما، يمكنني مساعدتك في ذلك. هذه هي الأشياء التي يجب القيام بها. اذهب إلى **config.json** وابحث عن **autoCreateDB**. إذا وجدته، فقط قم بتغيير القيمة من true إلى false.
<br><br>
__قبل:__
```json
{
  "autoCreateDB": true,
}
```
__بعد:__
```json
{
 "autoCreateDB": false,
}
```
<br>
بتعيين هذا إلى false، قد لا تعمل بعض الأوامر مثل checktt، rankup والأوامر الأخرى التي تحتاج إلى قاعدة بيانات ولكن له فائدة جيدة تجعل الروبوت الخاص بك يدوم لفترة أطول وقد يتجنب التعليق لفترة طويلة.

---

<details>
  <summary>ما الجديد؟</summary>
  
  __التحديث!__
  - تم إصلاح مشكلة العرض.
  - تم إضافة unfont.js
  - تم إضافة sharecontact.js
  - تم إصلاح الأخطاء!
  - تم حل مشكلة HandleReply.js!
</details>

<details>
  <summary>اللغات</summary>
  
> - en = الإنجليزية 
> - vi = الفيتنامية 
> - tl = التاغالوغية 
> - cb = بيسايا/سيبوانو
> - bd = البنغالية 
> - ar = العربية

اذهب إلى ملف config.json وحددها في خاصية اللغة:
```json
{
  "language": "en",
}
```

نبحث عن ترجمة باللغة الفرنسية قام بها شخص محلي! ستكون مساهمتك محل تقدير كبير وسيتم تقديم الإشادات!
</details>

<details>
  <summary>تشفير حالة التطبيق</summary>
  
  ### الأمن 
  هل تواجه مشكلة بشأن سرقة أو اختراق حسابك؟ قد يكون ذلك بسبب حالة التطبيق الخاصة بك التي تمت سرقتها من قبل مستخدمين آخرين. إذا كنت تشعر بعدم الأمان، حاول تعيين *"encryptSt"* إلى *true* في ملف **config.json**.
  
  ```json
  {
    "encrpytSt": true
  }
  ```

  لن يؤثر التشفير على عملية الروبوت وسيجعل حالة التطبيق أصعب للاستخدام من قبل اللصوص والمخترقين. علاوة على ذلك، قد يصبح التطبيق بطيئًا عند فتح appstate.json بعد تشفيره ولكنه يستحق التجربة.
  
</details>

---
### استضافة RENDER
__=>__ استضف ملف الروبوت الخاص بك على [render.com](https://dashboard.render.com) لجعل ملفك نشطًا دائمًا.
- إذا كان لديك بعض المشاكل المتعلقة بالاستضافة على render! جرب مجموعتنا الجديدة على الفيسبوك مع مناقشات حول الاستضافة على render!
- أنا أبحث حاليًا عن رفقاء ومبدعين للمحادثات الذين لديهم بعض المعرفة حول الاستضافة في render ليصبحوا مشرفين.
- لا تتردد في الانضمام إلينا في [مجتمع Render](https://www.facebook.com/groups/7389392131128817/?ref=share) على الفيسبوك! نراك هناك!
[<img align="center" src="https://i.ibb.co/DMXyLm3/Picsart-24-02-14-12-25-06-014.jpg">](https://www.facebook.com/groups/7389392131128817/?ref=share&mibextid=NSMWBT)
</h1>

<details>
  <summary>الدروس التعليمية</summary>

 > __كيفية استضافة BotPack على render.com؟__
 ><br> شاهد الدرس [هنا!](https://www.facebook.com/share/v/JXGAppBJ6A9TNzjb/?mibextid=oFDknk)
 > [<img align="center" src="https://i.ibb.co/wKkZ6Lc/render.jpg">](https://www.facebook.com/share/v/JXGAppBJ6A9TNzjb/?mibextid=oFDknk)
  
</details>

---

- مرحبًا بك في [BotPack](https://replit.com/@YanMaglinte/BotPack)🌀 المستودع. هذا المشروع هو ملف روبوت غير رسمي من [Mirai](https://github.com/m1raibot/miraiv2) Repository، الذي طوره وصانه في البداية [Pham Van Dien](https://github.com/D-Jukie/Disme-Bot.git)، المعروف أيضًا باسم [D-Jukie](https://github.com/D-Jukie). الملف الأساسي لهذا المشروع مأخوذ من مشروع [Disme-Bot](https://github.com/D-Jukie/Disme-Bot.git) على GitHub.

- [BotPack](https://replit.com/@YanMaglinte/BotPack)🌀 هو ملف روبوت ماسنجر معدل بواسطة [Yan Maglinte](https://replit.com/@YanMaglinte)🇵🇭. إنه نسخة محسنة من روبوت ماسنجر Mirai، مع بعض التحسينات الفريدة.

- ميزة رئيسية هي وظيفة `usePrefix` المتكاملة في كل أمر. هذه الوظيفة تلغي الحاجة إلى البادئات، مما يوفر تجربة مستخدم أكثر سلاسة. بالإضافة إلى الأوامر الجاهزة والتشفيرات القابلة للتحرير، يشجع هذا الملف المستخدمين على التعلم والاستكشاف بحرية.
<img align="center" src="https://i.imgur.com/Je8NbDn.jpg"/>

- علاوة على ذلك، يأتي [BotPack](https://replit.com/@YanMaglinte/BotPack)🌀 بميزة سهلة الاستخدام تتيح تخصيص تصميم وحدة التحكم الخاصة بك بسهولة عبر خيار `theme` في ملف config.json. هذا يجعله متاحًا بشكل كبير، خاصة للمبتدئين.
<img align="center" src="https://i.imgur.com/wHD2zXv.jpg"/>

<details>
  <summary>الثيمات المتاحة</summary>
  
> - الأزرق
> - الأكوا
> - الناري
> - البرتقالي
> - الوردي
> - الأحمر
> - الرجعي
> - ضوء الشمس
> - المراهق
> - الصيف
> - الزهرة
> - الشبح
> - الأرجواني
> - قوس قزح
> - المخترق

اذهب إلى `config.json` وحددها في خاصية اللغة:
```json
{
  "DESIGN": {
    "Title": "BotPack",
    "Theme": "Blue",
    "Admin": "YOUR_NAME"
  }
}
```
</details>

- استمتع بعالم من الإمكانيات مع [BotPack](https://replit.com/@YanMaglinte/BotPack)🌀 - ملف ماسنجر فيسبوك مصمم لجعل تفاعلك مع روبوتات الماسنجر أكثر سلاسة وكفاءة.
---
<div align="center">
      <h3>حسابي على Replit:
      <a href="https://replit.com/@YanMaglinte" style="color: green;"><br>@YanMaglinte🔥</a>
        <br>
        حسابي على الفيسبوك:<a href="https://www.facebook.com/yandeva.me?mibextid=b06tZ0" style="color: green;"><br>Yan🚀</a></h3></div>

- إذا واجهت أي مشاكل أو كان لديك أي أسئلة تتعلق بهذا REPL، لا تتردد في التواصل معي على الفيسبوك. أنا هنا لمساعدتك!

<img align="center" src="https://i.ibb.co/pnm38zY/yanmaglinte.png"/>

### **كيفية البدء باستخدام BotPack؟**

1. ابدأ بالتوجه إلى [Replit](https://replit.com).
2. قم بتسجيل الدخول إلى حسابك الحالي أو اشترك للحصول على حساب جديد.
3. استخدم شريط البحث للعثور على [BotPack](https://replit.com/@YanMaglinte/BotPack).
4. انقر على `القوالب`.
5. بعد البحث، اختر قالب BotPack الأكثر شعبية من النتائج.
6. بعد ذلك، انقر على `استخدام القالب`.
7. بعد نسخ القالب، قم بضبط PREFIX، BOTNAME والخصائص الأخرى في ملف `config.json`.
8. افتح حساب الفيسبوك الذي تريد تحويله إلى روبوت دردشة.
9. بعد تسجيل الدخول، احصل على حالة التطبيق الخاصة بك باستخدام امتداد [C3C fbstate](https://github.com/c3cbot/c3c-fbstate/archive/refs/tags/1.5.zip).
10. انسخ حالة التطبيق، عد إلى المستودع، والصقها في appstate.json.
11. الآن، قم بتشغيله، وستكون لديك روبوتك!

> [!تحذير]
> *هناك خطر حظر حسابك بعد تشغيل الكود، لذا يرجى ضمان إدارة الحساب والتعامل الصحيحين. إذا حدث ذلك، حاول تسجيل الدخول مرة أخرى واستعادة حالة التطبيق الخاصة بك.*

### الشكر
شكر خاص للأفراد التاليين على مشاريعهم الرائعة التي جعلت هذا المشروع المعدل ممكنًا:
- SpermLord
- CatalizCS
- D-Jukie
- NTKhang03
- KhangGia1810
- XaviaTeam
<br><br> __بالتعاون مع__
  - [Liane Cagara 🎀](https://www.facebook.com/nealiana.kaye.cagara?mibextid=ZbWKwL)

_تاريخ التحديث: 12 مايو 2024 (PST)<br>تاريخ الإنشاء: 11 يونيو 2023_

---
حقوق الطبع والنشر © 2024 Yan Maglinte (YANDEVA)، الفلبين.<br>
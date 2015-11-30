Sass шаблон для лендінгів
=============
+ прикручена форма відправки повідомлень на email користувача. Дані користувача можна редагувати в ajax.php

Структура
=============
`/css/screen.css` - В цей файл генерується код з screen.scss

`/css/style.css` - Таблиця стилей створена для редагування виключно методом css 

`/sass/screen.scss` - Основний шаблон де підключаються інші файли .scss

`/sass/reset.scss` - Скидання всіх стилей і початкова стилізація сайту

`/sass/main.scss` - Всі стилі для сайту

`/sass/mobile.scss` - Стилі для адаптивної версії

`/sass/lib/mixins.scss` - Міксіни

Назви класів і т.д.
=============
Стандартний вигляд шаблону:
```
<div class="wrapper">
<!--header-->
<header class="header">
</header>
<div class="main">
	<div class="container">
		<!--inside info-->
	</div>
</div>
<footer class="footer">
</footer>
</div>
```

`.wrapper` - Обгортка сайту

`.container` - Контейнер сайту, рівняє контент по центру

Інформація по використанню тегів
=============
Основні теги html5 повинні бути з класами, і до класів має йти привязка стилей.
Наприклад: 
```
nav{color:black;} - поганий тон;
nav.nav{color:black;} - хороший тон;
```

JS
=============
Я використовую такі плагіни для цього шаблону:
* `placeholder` - Підтримка placeholder в старих браузерах
* `fancybox` - Стандартне модальне вікно, використовується на 90% сайтах.
* `modernizr` - Підтримка старих браузерів
* `bxslider` - Один з найкращих слайдерів

Всі свої скрипти потрібно писати в файлі common.js

Методологія 
=============
* _wrapper - головний батьківський блок
* _inner - батьківський блок
* _block - дочірній блок
* _item - найменший дочірній блок 

Приклад:
```
<div class="contacts_wrapper">
	<div class="contacts_inner">
		<div class="contacts_block">
			<div class="contacts_item">City, Phone</div>
		</div>
	</div>
</div>
</div>
```

Загальні правила
=============
Якщо ваш клас використовується в javascript, то пишіть його з префіксом js-, наприклад:

`<div class="contacts_item js-show">City, Phone</div>`

Якщо ви модифікуєте якийсь готовий елемент своїми стилями, давайте йому назву стилей які ви використовуєте:

`<div class="contacts_item color_red">City, Phone</div>`

або

`<div class="contacts_item bg_red">City, Phone</div>`

Всі великі блоки повинні бути відзначенні коментами, де початок, а де кінець:
```
<!--header-->
<header class="header">
	
</header>
<!--end-header-->
```

Так само і css:

```
/*----header-----*/
.header {
  width: 1000px;
}
/*----end header-----*/
```

Модальні вікна повинні мати клас .modal



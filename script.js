const data = [
  {
    id: `1`,
    q: `Что такое клиент-серверная архитектура?`,
    a: `<p style="text-align:justify"><strong><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">&laquo;Клиент&nbsp;&mdash; сервер&raquo;</span></strong><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">&nbsp;&mdash; архитектура, в которой задания или сетевая нагрузка распределены между поставщиками услуг, называемыми серверами, и заказчиками услуг, называемыми клиентами. Фактически&nbsp;</span><a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82_(%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0)" title="Клиент (информатика)"><span style="color:#0645AD; font-family:arial,sans-serif; font-size:11.0pt">клиент</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">&nbsp;и&nbsp;</span><a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B2%D0%B5%D1%80_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)" title="Сервер (программное обеспечение)"><span style="color:#0645AD; font-family:arial,sans-serif; font-size:11.0pt">сервер</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">&nbsp;&mdash; это&nbsp;</span><a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5" title="Программное обеспечение"><span style="color:#0645AD; font-family:arial,sans-serif; font-size:11.0pt">программное обеспечение</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">. Обычно эти программы расположены на разных&nbsp;</span><a href="https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B0" title="Вычислительная машина"><span style="color:#0645AD; font-family:arial,sans-serif; font-size:11.0pt">вычислительных машинах</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">&nbsp;и взаимодействуют между собой через&nbsp;</span><a href="https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C" title="Вычислительная сеть"><span style="color:#0645AD; font-family:arial,sans-serif; font-size:11.0pt">вычислительную сеть</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">&nbsp;посредством&nbsp;</span><a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%82%D0%B5%D0%B2%D0%BE%D0%B9_%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB" title="Сетевой протокол"><span style="color:#0645AD; font-family:arial,sans-serif; font-size:11.0pt">сетевых протоколов</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">, но они могут быть расположены также и на одной машине. Программы-серверы ожидают от клиентских программ запросы и предоставляют им свои ресурсы в виде данных (</span><a href="https://ru.wikipedia.org/w/index.php?title=%D0%9F%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B0_%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2&amp;action=edit&amp;redlink=1" title="Передача файлов (страница отсутствует)"><span style="color:#BA0000; font-family:arial,sans-serif; font-size:11.0pt">передача файлов</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt"> ,работа с&nbsp;</span><a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B7%D0%B0_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85" title="База данных"><span style="color:#0645AD; font-family:arial,sans-serif; font-size:11.0pt">базами данных</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">) или в виде сервисных функций (работа с </span><a href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BF%D0%BE%D1%87%D1%82%D0%B0" title="Электронная почта"><span style="color:#0645AD; font-family:arial,sans-serif; font-size:11.0pt">электронной почтой</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">). Поскольку одна программа-сервер может выполнять запросы от множества программ-клиентов, её размещают на специально выделенной вычислительной машине, настроенной особым образом, как правило, совместно с другими программами-серверами, поэтому производительность этой машины должна быть высокой. Из-за особой роли такой машины в сети, специфики её оборудования и программного обеспечения, её также называют&nbsp;</span><a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B2%D0%B5%D1%80_(%D0%B0%D0%BF%D0%BF%D0%B0%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)" title="Сервер (аппаратное обеспечение)"><span style="color:#0645AD; font-family:arial,sans-serif; font-size:11.0pt">сервером</span></a><span style="color:#202122; font-family:arial,sans-serif; font-size:11.0pt">, а машины, выполняющие клиентские программы, соответственно, клиентами.</span></p>`,
  },
  {
    id: `2`,
    q: `Одноуровневая клиент-серверная архитектура «клиент-сервер» (1-Tier)?`,
    a: `<p><u><strong>Одноуровневая архитектура &laquo;клиент-сервер&raquo; (1-Tier)</strong></u> &ndash; такая, где все <u>программы-клиенты</u> рассредоточены по рабочим станциям, которые обращаются к общему серверу баз данных или к общему файловому серверу. Никаких прикладных программ сервер при этом не исполняет, только предоставляет данные.</p>

<p><em>Минус данной системы: данные будут присутствовать в разных вариантах на рабочих станциях. Поэтому возникает проблема их синхронизации на отдельных машинах.</em></p>`,
  },
  {
    id: `3`,
    q: `Двухуровневая клиент-серверная архитектура «клиент-сервер»?`,
    a: `<p><strong><u>Двухуровневая архитектура &laquo;клиент-сервер&raquo;</u> </strong>- архитектура, в которой прикладные программы сосредоточены на сервере приложений (Application Server), а в рабочих станциях находятся программы-клиенты, которые предоставляют для пользователей интерфейс для работы с приложениями на общем сервере.</p>

<p><u>Такую архитектуру можно разделить на два варианта</u>:</p>`,
  },
  {
    id: `4`,
    q: `Что означает “fat client thin server” (толстый клиент, тонкий сервер)?`,
    a: `<p><span style="font-family:arial,sans-serif; font-size:11pt">&nbsp;общие данные хранятся на сервере, а логика их обработки и бизнес-данные хранятся на клиентской машине</span></p>`,
  },
  {
    id: `5`,
    q: `Что означает thin client fat server” (тонкий клиент, толстый сервер)?`,
    a: `<p>Когда не только данные, но и логика их обработки и бизнес-данные хранятся на сервере</p>`,
  },
  {
    id: `6`,
    q: `Трёхуровневая клиент-серверная архитектура (3-Tier)?`,
    a: `<p>сервер баз данных, файловый сервер и другие представляют собой отдельный уровень, результаты работы которого использует сервер приложений. Логика данных и бизнес-логика находятся в сервере приложений. Все обращения клиентов к базе данных происходят через промежуточное программное обеспечение (middleware), которое находится на сервере приложений. Вследствие этого, повышается гибкость работы и производительность.</p>`,
  },
  {
    id: `7`,
    q: `Многоуровневая клиент-серверная архитектура (N-Tier)?`,
    a: `<p><strong><u>Многоуровневая архитектура (</u><u>N</u><u>-</u><u>Tier</u></strong><u><strong>)</strong> </u>- несколько серверов приложений используют результаты работы друг друга, а также данные от различных серверов баз данных, файловых серверов и других видов серверов.</p>`,
  },
  {
    id: `8`,
    q: `Что такое HTTP протокол?`,
    a: `<p><strong>HTTP</strong>&nbsp;(<a href=""https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA"" title=""Английский язык"">англ.</a>&nbsp;<em>HyperText</em> <em>Transfer</em> <em>Protocol</em>&nbsp;&mdash; &laquo;протокол передачи&nbsp;<a href=""https://ru.wikipedia.org/wiki/%D0%93%D0%B8%D0%BF%D0%B5%D1%80%D1%82%D0%B5%D0%BA%D1%81%D1%82"" title=""Гипертекст"">гипертекста</a>&raquo;)&nbsp;&mdash;&nbsp;сетевой протокол&nbsp;передачи данных, изначально&nbsp;&mdash; в виде гипертекстовых документов в формате&nbsp;<a href=""https://ru.wikipedia.org/wiki/HTML"" title=""HTML"">HTML</a>, в настоящее время используется для передачи произвольных данных.</p>

<p>По HTTP-протоколу можно отправить запрос на сервер (request) и получить ответ от сервера (response). Запросы и ответы немного отличаются параметрами.</p>`,
  },
  {
    id: `9`,
    q: `Из чего состоит HTTP сообщение запроса (request)?`,
    a: `<p>&nbsp;</p>

<div>
<p><span style=""background-color:#D3D3D3"">GET /wiki/HTTP HTTP/1.0</span></p>

<p><span style=""background-color:#D3D3D3"">Host: ru.wikipedia.org</span></p>
</div>

<p>Каждое сообщение состоит из трех частей:</p>

<ol>
	<li>Стартовая строка (Starting line) &mdash; определяет служебные данные.</li>
	<li>Заголовки (Headers) &mdash; описание параметров сообщения.</li>
	<li>Тело сообщения (Body) &mdash; данные сообщения. Должны отделяться от заголовков пустой строкой.</li>
</ol>

<p>В HTTP-запросе обязательны только стартовая строка и заголовок Host.</p>`,
  },
  {
    id: `10`,
    q: `Какие есть Методы HTTP запроса?`,
    a: `<p><u><strong>HTTP-запрос</strong></u> должен содержать какой-то метод. Всего их девять: <strong>GET, POST, PUT, OPTIONS, HEAD, PATCH, DELETE, TRACE, CONNECT.</strong> Самые распространенные &mdash; <strong>GET </strong>и <strong>POST</strong>.</p>`,
  },
  {
    id: `11`,
    q: `Что делает GET запрос?`,
    a: `<p><strong>GET</strong> &mdash; запрашивает контент из сервера. Поэтому у запросов с методом GET нет тела сообщения. Но при необходимости можно отправить параметры через path.</p>`,
  },
  {
    id: `12`,
    q: `Что делает POST запрос?`,
    a: `<p><strong>POST</strong> &mdash; публикует информацию на сервере. <strong>POST-запро</strong>с может передавать разную информацию: параметры в формате ключ=значение, JSON, HTML-код или даже файлы. Вся информация передается в теле сообщения.</p>`,
  },
  {
    id: `13`,
    q: `Из чего состоит HTTP сообщение ответа (response)?`,
    a: `<p>После получения запроса, сервер его обрабатывает и отправляет ответ клиенту:</p>

<div>
<pre>
<span style=""background-color:#D3D3D3"">HTTP/1.0 200 OK</span></pre>
</div>

<p>Стартовая строка в респонсе содержит версию протокола (HTTP/1.1), Код статуса (200), Описание статуса (OK). В заголовках &mdash; тип и длина контента. В теле ответа &mdash; HTML-код, который браузер прорисует в HTML-страницу.</p>`,
  },
  {
    id: `14`,
    q: `Что означают цифры Response Status Codes?`,
    a: `<p><strong>Response Status Codes</strong> всегда трехзначные, и первая цифра кода указывает категорию ответа:</p>

<p><strong>1xx</strong> &mdash; информационный. Запрос получен, сервер готов к продолжению;</p>

<p><strong>2xx</strong> &mdash; успешный. Запрос получен, понятен и обработан;</p>

<p><strong>3xx</strong> &mdash; перенаправление. Следующие действия нужно выполнить для обработки запроса;</p>

<p><strong>4xx</strong> &mdash; ошибка клиента. Запрос содержит ошибки или не отвечает протоколу;</p>

<p><strong>5xx</strong> &mdash; ошибка сервера. Сервер не смог обработать запрос, хотя был составлен верно;</p>`,
  },
  {
    id: `15`,
    q: `Чем отличается HTTP от HTTPS?`,
    a: `<p>&nbsp;</p>

<p><span style=""font-family:arial,sans-serif; font-size:11.0pt""><strong>HTTPS </strong>синтаксически идентичен протоколу <strong>HTTP</strong>, то есть использует те же стартовые строки и заголовки.</span></p>`,
  },
  {
    id: `16`,
    q: `Что такое HTML?`,
    a: `<p><strong>HTML (Hypertext Markup Language)</strong> - это код, который используется для структурирования и отображения веб-страницы и её контента. <strong>HTML</strong> не является языком программирования; это язык разметки, и используется, чтобы сообщать вашему браузеру, как отображать веб-страницы. <strong>HTML</strong> состоит из элементов.</p>`,
  },
  {
    id: `17`,
    q: `Опишите базовую структуру HTML?`,
    a: `<p>&nbsp;</p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">&lt;!DOCTYPE html&gt;</span></span></span></strong></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#00b050"">&lt;!-- корневая обертка страницы --&gt;</span></span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">&lt;html lang=&quot;ru&quot;&gt;</span></span></span></strong></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif"">&nbsp; <span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#00b050"">&lt;!-- тег который содержит все вспомогательные данные о HTML документе:</span></span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#00b050"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - заголовок, описание, SEO-информация, подключение стилей и шрифтов, скриптов, meta-информация.</span></span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#00b050"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Данные указанные внутри этого тега не отрисовываются на странице--&gt;</span></span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif"">&nbsp; <span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">&lt;<strong>head&gt;</strong></span></span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">&nbsp;&nbsp;&nbsp; &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span></span></strong></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">&nbsp;&nbsp;&nbsp; &lt;title&gt;</span></span></span></strong><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">Моя</span></span></span></strong><strong> </strong><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">первая</span></span></span></strong><strong> </strong><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">страница</span></span></span></strong><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">&lt;/title&gt;</span></span></span></strong></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong>&nbsp; </strong><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">&lt;/head&gt;</span></span></span></strong></span></span></p>

<p>&nbsp;</p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#00b050"">&nbsp; &lt;!-- тег, который содержит всю разметку HTML документа. </span></span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#00b050"">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Именно эта разметка будет отображаться в браузере --&gt;</span></span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">&nbsp; <strong>&lt;body&gt;&lt;/body&gt;</strong></span></span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:10.0pt""><span style=""font-family:Consolas""><span style=""color:#24292f"">&lt;/html&gt;</span></span></span></strong></span></span></p>`,
  },
  {
    id: `18`,
    q: `Из чего состоит HTML-элемент?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Элемент(Element)</span></span></u></strong><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif"> состоит: Открывающий тег, закрывающий тег и контент вместе составляют элемент.</span></span> <span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Элементы также могут иметь атрибуты.</span></span></span></span></p>`,
  },
  {
    id: `19`,
    q: `Для чего нужны атрибуты в HTML-элементах?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Атрибуты</span></span></u></strong><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif"> содержат дополнительную информацию об элементе.</span></span></span></span></p>`,
  },
  {
    id: `20`,
    q: `Что такое пустые элементы?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Некоторые элементы не имеют контента, и называются <strong><u>пустыми элементами</u></strong>.</span></span></span></span></p>`,
  },
  {
    id: `21`,
    q: `Для чего используется Элемент HTML form?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Элемент HTML form (&lt;form&gt;)</span></span></u></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> представляет (собой) раздел документа, содержащий интерактивные элементы управления, которые позволяют пользователю отправлять информацию на веб-сервер.</span></span></span></span></p>

<ul>
	<li><span style=""font-size:11pt""><span style=""color:black""><span style=""font-family:Calibri,sans-serif""><a href=""https://puzzleweb.ru/html/tag_input.php"" style=""color:#0563c1; text-decoration:underline""><span style=""font-family:&quot;Verdana&quot;,sans-serif""><span style=""color:#33801a"">&lt;input&gt;</span></span></a></span></span></span></li>
	<li><span style=""font-size:11pt""><span style=""color:black""><span style=""font-family:Calibri,sans-serif""><a href=""https://puzzleweb.ru/html/tag_textarea.php"" style=""color:#0563c1; text-decoration:underline""><span style=""font-family:&quot;Verdana&quot;,sans-serif""><span style=""color:#33801a"">&lt;textarea&gt;</span></span></a></span></span></span></li>
	<li><span style=""font-size:11pt""><span style=""color:black""><span style=""font-family:Calibri,sans-serif""><a href=""https://puzzleweb.ru/html/tag_button.php"" style=""color:#0563c1; text-decoration:underline""><span style=""font-family:&quot;Verdana&quot;,sans-serif""><span style=""color:#33801a"">&lt;button&gt;</span></span></a></span></span></span></li>
	<li><span style=""font-size:11pt""><span style=""color:black""><span style=""font-family:Calibri,sans-serif""><a href=""https://puzzleweb.ru/html/tag_select.php"" style=""color:#0563c1; text-decoration:underline""><span style=""font-family:&quot;Verdana&quot;,sans-serif""><span style=""color:#33801a"">&lt;select&gt;</span></span></a></span></span></span></li>
	<li><span style=""font-size:11pt""><span style=""color:black""><span style=""font-family:Calibri,sans-serif""><a href=""https://puzzleweb.ru/html/tag_option.php"" style=""color:#0563c1; text-decoration:underline""><span style=""font-family:&quot;Verdana&quot;,sans-serif""><span style=""color:#33801a"">&lt;option&gt;</span></span></a></span></span></span></li>
	<li><span style=""font-size:11pt""><span style=""color:black""><span style=""font-family:Calibri,sans-serif""><a href=""https://puzzleweb.ru/html/tag_fieldset.php"" style=""color:#0563c1; text-decoration:underline""><span style=""font-family:&quot;Verdana&quot;,sans-serif""><span style=""color:#33801a"">&lt;fieldset&gt;</span></span></a></span></span></span></li>
	<li><span style=""font-size:11pt""><span style=""color:black""><span style=""font-family:Calibri,sans-serif""><a href=""https://puzzleweb.ru/html/tag_datalist.php"" style=""color:#0563c1; text-decoration:underline""><span style=""font-family:&quot;Verdana&quot;,sans-serif""><span style=""color:#33801a"">&lt;datalist&gt;</span></span></a></span></span></span></li>
	<li><span style=""font-size:11pt""><span style=""color:black""><span style=""font-family:Calibri,sans-serif""><a href=""https://puzzleweb.ru/html/tag_label.php"" style=""color:#0563c1; text-decoration:underline""><span style=""font-family:&quot;Verdana&quot;,sans-serif""><span style=""color:#33801a"">&lt;label&gt;</span></span></a></span></span></span></li>
	<li><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><a href=""https://puzzleweb.ru/html/tag_legend.php"" style=""color:#0563c1; text-decoration:underline""><span style=""font-family:&quot;Verdana&quot;,sans-serif""><span style=""color:#33801a"">&lt;legend&gt;</span></span></a></span></span></li>
</ul>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Атрибуты</span></span><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> form: </span></span><a href=""https://developer.mozilla.org/ru/docs/Web/HTML/Element/form#attr-action"" style=""color:#0563c1; text-decoration:underline""><code><strong><span style=""font-size:10.0pt""><span style=""background-color:white""><span style=""color:blue"">action</span></span></span></strong></code></a>, <a href=""https://developer.mozilla.org/ru/docs/Web/HTML/Element/form#attr-autocomplete"" style=""color:#0563c1; text-decoration:underline""><code><strong><span style=""font-size:10.0pt""><span style=""background-color:white""><span style=""color:blue"">autocomplete</span></span></span></strong></code></a>, <a href=""https://developer.mozilla.org/ru/docs/Web/HTML/Element/form#attr-enctype"" style=""color:#0563c1; text-decoration:underline""><code><strong><span style=""font-size:10.0pt""><span style=""background-color:white""><span style=""color:blue"">enctype</span></span></span></strong></code></a>, <a href=""https://developer.mozilla.org/ru/docs/Web/HTML/Element/form#attr-method"" style=""color:#0563c1; text-decoration:underline""><code><strong><span style=""font-size:10.0pt""><span style=""background-color:white""><span style=""color:blue"">method</span></span></span></strong></code></a>, <a href=""https://developer.mozilla.org/ru/docs/Web/HTML/Element/form#attr-novalidate"" style=""color:#0563c1; text-decoration:underline""><code><strong><span style=""font-size:10.0pt""><span style=""background-color:white""><span style=""color:blue"">novalidate</span></span></span></strong></code></a>, <a href=""https://developer.mozilla.org/ru/docs/Web/HTML/Element/form#attr-target"" style=""color:#0563c1; text-decoration:underline""><code><strong><span style=""font-size:10.0pt""><span style=""background-color:white""><span style=""color:blue"">target</span></span></span></strong></code></a> (<span style=""background-color:#f2f1f1""><span style=""font-family:&quot;Courier New&quot;""><span style=""color:#1b1b1b"">_self, _blank, _parent, _top)</span></span></span></span></span></p>`,
  },
  {
    id: `22`,
    q: `Для чего используется элемент HTML <input>?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Элемент HTML &lt;input&gt;</span></span></u></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> используется для создания интерактивных элементов управления в веб-формах для получения данных от пользователя</span></span></span></span></p>

<p>&nbsp;</p>`,
  },
  {
    id: `23`,
    q: `Какие типы инпутов бывают?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><a href=""https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input#attr-type""><code><strong><span style=""font-size:10.0pt""><span style=""background-color:white""><span style=""color:blue"">type</span></span></span></strong></code></a> (<span style=""background-color:#f2f1f1""><span style=""font-family:&quot;Courier New&quot;""><span style=""color:#1b1b1b"">text, button, number, password ,color, date, email, file, hidden, radio, range, submit, </span></span></span>)</span></span></p>

<p>&nbsp;</p>`,
  },
  {
    id: `24`,
    q: `Что такое CSS?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Cascading Style Sheets (CSS)</span></span></u></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> &mdash; это язык иерархических правил , используемый для представления внешнего вида документа, написанного на HTML или XML. CSS описывает, каким образом элемент должен отображаться.</span></span></span></span></p>

`,
  },
  {
    id: `25`,
    q: `Что такое Каскад таблицы стилей?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Каскад</span></span></u></strong><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif"> таблицы стилей, если говорить упрощённо, означает, что порядок следования правил в CSS имеет значение; когда применимы два правила, имеющие одинаковую специфичность, используется то, которое идёт в CSS последним.</span></span></span></span></p>`,
  },
  {
    id: `26`,
    q: `Что такое CSS-селекторы?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Селекторы -</span></span></u></strong><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif"> выражения, которые говорят браузеру, к какому элементу HTML нужно применить те или иные свойства CSS, определённые внутри блока объявления стиля</span></span></span></span></p>`,
  },
  {
    id: `27`,
    q: `Что такое Специфичность в CSS?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Специфичность</span></span></u></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> определяет, как браузер решает, какое именно правило применяется в случае, когда несколько правил имеют разные селекторы, но, тем не менее, могут быть применены к одному и тому же элементу</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Различные типы селекторов имеют разной степени влияние на элементы страницы. Чем более общее влияние оказывает селектор на элементы страницы тем меньше его специфичность, конкретность.</span></span></span></span></p>

<table cellspacing=""0"" class=""Table"" style=""background:white; border-collapse:collapse; border:none; width:355px"">
	<thead>
		<tr>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; height:25px"">
			<p style=""text-align:center""><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">Селектор</span></span></span></strong></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:1px solid black; height:25px"">
			<p style=""text-align:center""><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">Вес</span></span></span></strong></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:1px solid black; height:25px"">
			<p style=""text-align:center""><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">Описание селектора</span></span></span></strong></span></span></p>
			</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">style=&quot;&quot;</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">1000</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">инлайновый стиль</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">#id</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">100</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">идентификатор</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">.class</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">10</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">класс</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">:hover</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">10</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">псевдокласс</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">[attr=value]</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">10</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">атрибут</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">LI</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">1</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">элемент</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">::before</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">1</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:25px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">псевдоэлемент</span></span></span></span></span></p>
			</td>
		</tr>
		<tr>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:28px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">*</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:28px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">0</span></span></span></span></span></p>
			</td>
			<td style=""background-color:white; border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:28px"">
			<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:10.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#24292f"">универсальный селектор</span></span></span></span></span></p>
			</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>`,
  },
  {
    id: `28`,
    q: `Что такое Наследование в CSS?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Наследование </span></span></u></strong><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">&mdash; некоторые значения свойства CSS, установленные для родительских элементов наследуются их дочерними элементами, а некоторые нет.</span></span></span></span></p>`,
  },
  {
    id: `29`,
    q: `Что такое Группирование в CSS?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Группирование</span></span></u></strong><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif"> применяет один и тот же стиль сразу к нескольким селекторам. Это делается для удобства представления и сокращения кода CSS. </span></span></span></span></p>`,
  },
  {
    id: `30`,
    q: `Какие есть способы добавления CSS на страницу?`,
    a: `<ul>
	<li>Внешняя таблица стилей
	<pre>
   &lt;link rel=&quot;stylesheet&quot; href=&quot;css/style.css&quot;&gt;</pre>
	</li>
	<li>Внутренние стили
	<pre>
   &lt;style&gt;
   h2 {
   color: red;
   }
   &lt;/style&gt;</pre>
	</li>
	<li>Встроенные стили
	<pre>
   &lt;p style=&quot;font-weight: bold; color: red;&quot;&gt;Обратите внимание на этот текст.&lt;/p&gt;</pre>
	</li>
</ul>`,
  },
  {
    id: `31`,
    q: `Какие есть единицы измерения в CSS?`,
    a: `<ul>
	<li><code>px</code>&nbsp;&ndash; абсолютные пиксели, к которым привязаны и потому не нужны&nbsp;<code>mm</code>,&nbsp;<code>cm</code>,&nbsp;<code>pt</code>&nbsp;и&nbsp;<code>pc</code>. Используется для максимально конкретного и точного задания размеров.</li>
	<li><code>em</code>&nbsp;&ndash; задаёт размер относительно шрифта родителя, используется там, где нужно упростить масштабирование компоненты.</li>
	<li><code>rem</code>&nbsp;&ndash; задаёт размер относительно шрифта&nbsp;<code>&lt;html&gt;</code>, используется для удобства глобального масштабирования: элементы которые планируется масштабировать, задаются в&nbsp;<code>rem</code>, а JS меняет шрифт у&nbsp;<code>&lt;html&gt;</code>.</li>
	<li><code>%</code>&nbsp;&ndash; относительно такого же свойства родителя (как правило, но не всегда), используется для ширин, высот и так далее, без него никуда, но надо знать, относительно чего он считает проценты.</li>
	<li><code>vw</code>,&nbsp;<code>vh</code>,&nbsp;<code>vmin</code>,&nbsp;<code>vmax</code>&nbsp;&ndash; относительно размера окна браузера.</li>
</ul>`,
  },
  {
    id: `32`,
    q: `Значения свойства display в CSS?`,
    a: `<p>Значений много, но самыми популярными являются:</p>

<ul>
	<li><code>none</code>

	<ul>
		<li>Блочные элементы располагаются один над другим, вертикально</li>
		<li>Элемент не показывается, вообще. Как будто его и нет.</li>
	</ul>
	</li>
	<li><code>block</code>
	<ul>
		<li>Блочные элементы располагаются один над другим, вертикально</li>
		<li>Блок стремится расшириться на всю доступную ширину. Можно указать ширину и высоту явно.</li>
	</ul>
	</li>
	<li><code>inline</code>
	<ul>
		<li>Элементы располагаются на той же строке, последовательно.</li>
		<li>Ширина и высота элемента определяются по содержимому. Поменять их нельзя.</li>
	</ul>
	</li>
	<li><code>inline-block</code>
	<ul>
		<li>Располагается в строке.</li>
		<li>Размер устанавливается по содержимому.</li>
		<li>Элемент всегда прямоугольный</li>
		<li>Работают свойства width/height.</li>
	</ul>
	</li>
	<li><code>flex</code>
	<ul>
		<li>Flexbox позволяет удобно управлять дочерними и родительскими элементами на странице, располагая их в необходимом порядке.</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>`,
  },
  {
    id: `33`,
    q: `Значения свойства свойство Position в CSS?`,
    a: `<ul>
	<li>
	<p><code>static</code>&nbsp;Это значение позволяет элементу находиться в обычном его состоянии, расположенном на своём месте в документе. Свойства top, right, bottom, left и z-index не применяются к данному элементу. Это значение по умолчанию.</p>
	</li>
	<li>
	<p><code>relative</code>&nbsp;Элемент позиционируется в соответствии с нормальным потоком документа, а затем смещается относительно себя на основе значений top, right, bottom и left. Смещение не влияет на положение любых других элементов; таким образом, пространство, заданное для элемента в макете страницы, такое же, как если бы позиция была static.</p>
	</li>
	<li>
	<p><code>absolute</code>&nbsp;Элемент удаляется из обычного потока документов, и для элемента в макете страницы не создаётся пробела. Он расположен относительно его ближайшего относительно позиционированного предка, если таковой имеется; в противном случае он помещается относительно исходного содержащего блока. Его конечная позиция определяется значениями top, right, bottom, и left.</p>
	</li>
	<li>
	<p><code>fixed</code>&nbsp;Элемент выбивается из обычного потока документа, и для элемента в макете страницы не создаётся пространство. Он позиционируется относительно исходного содержащего блока, установленного viewport, за исключением случаев, когда один из его предков имеет свойство transform, perspective, или filter, установленное на что-то иное, кроме none (см. CSS Transforms Spec), и в этом случае этот предок ведёт себя как содержащий блок. (Обратите внимание, что существуют несогласованности браузера с perspective и filter, способствующими содержанию формирования блоков.) Его конечная позиция определяется значениями top, right, bottom и left.</p>
	</li>
	<li>
	<p><code>sticky</code>&nbsp;//ToDo Элемент позиционируется в соответствии с нормальным потоком документа, а затем смещается относительно его ближайшего прокручивающего предка и содержащего блока (ближайший родительский уровень блока), включая элементы, связанные с таблицей, на основе значений top, right, bottom, и left. Смещение не влияет на положение любых других элементов. Это значение всегда создаёт новый контекст наложения. Обратите внимание, что липкий элемент &laquo;прилипает&raquo; к его ближайшему предшественнику, имеющему &laquo;механизм прокрутки&raquo; (созданный при overflow равном hidden, scroll, auto или overlay), даже если тот не является ближайшим фактически прокручивающим предком. Это эффективно препятствует любому &laquo;липкому&raquo; поведению</p>
	</li>
</ul>

<p>&nbsp;</p>`,
  },
  {
    id: `34`,
    q: `Что такое блочная-модель в CSS?`,
    a: `<p>В <strong>HTML-документе</strong> каждому элементу на странице соответствует прямоугольная область (бокс или блок). Движок рендеринга в браузере определяет размеры и положение боксов на странице, а также их свойства вроде цвета, фоновой картинки для того, чтобы отобразить их на экране.</p>

<p>В языке <strong>CSS</strong> есть специальная боксовая модель (также блоковая модель или блочная модель, англ. <strong>box model</strong>), которая описывает, из чего состоит бокс и какие свойства влияют на его размеры. В ней у каждого бокса есть 4 области: margin (внешние отступы), border (рамка), padding (внутренние поля), и content (контент или содержимое).</p>`,
  },
  {
    id: `35`,
    q: `Cвойство box-sizing в CSS?`,
    a: `<p>По умолчанию в блоковой модели CSS ширина и высота, которую вы задаёте элементу применяется только для контента элемента. Если у элемента есть граница или внутренний отступ, то они добавляются к ширине и высоте, чтобы получить отображаемый на экране размер.</p>

<p>Свойство box-sizing может изменять это поведение:</p>

<p><code>content-box</code>&nbsp;даёт стандартное поведение свойства&nbsp;<code>box-sizing</code>. Если вы выставите элементу ширину 100 пикселей, то ширина его контента будет 100 пикселей, а ширина границ и внутренних отступов при рендере будет добавлена к финальной ширине, делая элемент шире ста пикселей.&nbsp;<code>border-box</code>&nbsp;говорит браузеру учитывать любые границы и внутренние отступы в значениях, которые вы указываете в ширине и высоте элемента. Если вы выставите элементу ширину 100 пикселей, то эти 100 пикселей будут включать в себя границы и внутренние отступы, а контент сожмётся, чтобы выделить для них место. Обычно это упрощает работу с размерами элементов.</p>`,
  },
  {
    id: `36`,
    q: `Что такое псевдокласс в CSS?`,
    a: `Псевдокласс — это селектор, который выбирает элементы, находящиеся в специфическом состоянии, например, они являются первым элементом своего типа, или на них наведён указатель мыши. Они обычно действуют так, как если бы вы применили класс к какой-то части вашего документа, что часто помогает сократить избыточные классы в разметке и даёт более гибкий, удобный в поддержке код.

Псевдоклассы — это ключевые слова, которые начинаются с двоеточия :`,
  },
  {
    id: `37`,
    q: `Какие вы знаете Псевдоклассы в CSS?`,
    a: `<table>
	<thead>
		<tr>
			<th>Селектор</th>
			<th>Описание</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>:active</td>
			<td>ользователь активирует (например, щёлкает мышью) элемент.</td>
		</tr>
		<tr>
			<td>:checked</td>
			<td>Соответствует переключателю или флажку в выбранном состоянии.</td>
		</tr>
		<tr>
			<td>:disabled</td>
			<td>Соответствует элементам пользовательского интерфейса, которые находятся в отключённом состоянии.</td>
		</tr>
		<tr>
			<td>:first-child</td>
			<td>Соответствует элементу, который является первым среди других дочерних элементов одного предка.</td>
		</tr>
		<tr>
			<td>:focus</td>
			<td>Соответствует элементу, имеющему фокус.</td>
		</tr>
		<tr>
			<td>:hover</td>
			<td>Соответствует элементу, на который наведён курсор мыши.</td>
		</tr>
		<tr>
			<td>:invalid</td>
			<td>Соответствует элементу, например&nbsp;<code>&lt;input&gt;</code>, в недопустимом состоянии.</td>
		</tr>
		<tr>
			<td>:visited</td>
			<td>Соответствует посещённым ссылкам.</td>
		</tr>
		<tr>
			<td>:placeholder-shown</td>
			<td>Соответствует элементу input, который показывает текст-заполнитель.</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>`,
  },
  {
    id: `38`,
    q: `Что такое псевдоэлемент в CSS?`,
    a: `<p><code>Псевдоэлементы</code>&nbsp;ведут себя сходным образом, однако они действуют так, как если бы вы добавили в разметку целый новый HTML-элемент, а не применили класс к существующим элементам. Псевдоэлементы начинаются с двойного двоеточия&nbsp;<code>::</code>.</p>`,
  },
  {
    id: `39`,
    q: `Какие вы знаете псевдоэлементы в CSS?`,
    a: `<table>
	<thead>
		<tr>
			<th>Селектор</th>
			<th>Описание</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>::after</td>
			<td>Соответствует элементу, который допускает стилизацию и появляется после текущего содержимого порождающего элемента.</td>
		</tr>
		<tr>
			<td>::before</td>
			<td>Соответствует элементу, который допускает стилизацию и появляется перед текущим содержимым порождающего элемента.</td>
		</tr>
		<tr>
			<td>::first-letter</td>
			<td>Соответствует первой букве элемента.</td>
		</tr>
		<tr>
			<td>::first-line</td>
			<td>Соответствует первой строке содержимого порождающего элемента.</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>`,
  },
  {
    id: `40`,
    q: `Типы данных в JavaScript?`,
    a: `<p>На данный момент в JavaScript существует 8-мь основных типов данных:</p>

<ol>
	<li><code>String</code>&nbsp;- строка.</li>
	<li><code>Number</code>&nbsp;- число (как целочисленные так и с плавающей запятой)</li>
	<li><code>BigInt</code>&nbsp;- число не ограниченной величины. Идентификатор BigInt это&nbsp;<code>n</code>&nbsp;на конце числа.</li>
	<li><code>Boolean</code>&nbsp;- булевое число, то есть&nbsp;<code>false</code>&nbsp;или&nbsp;<code>true</code>.</li>
	<li><code>Symbol</code>&nbsp;- используется для создания уникальных идентификаторов</li>
	<li><code>null</code>&nbsp;- специальное значение, которое представляет собой &laquo;ничего&raquo;, &laquo;пусто&raquo; или &laquo;значение неизвестно&raquo;.</li>
	<li><code>undefined</code>- специальное значение, означающее, что &laquo;значение не было присвоено&raquo;.</li>
	<li><code>Object</code>&nbsp;- это сложный тип данных, который позволяет нам хранить коллекции данных.</li>
</ol>`,
  },
  {
    id: `41`,
    q: `Разница между == и === (нестрогое/строгое равенство)?`,
    a: `<p>Нестрогое просто сравнивание просто сравнивает значение. Нестрогое дополнительно сравнивает их типы.</p>`,
  },
  {
    id: `42`,
    q: `Разница между function declaration и function expression?`,
    a: `<p><code>Function declaration</code>&nbsp;- Это функция созданная в основном потоке кода. Для начала нужно указать ключевое слово&nbsp;<code>function</code>. Затем имя функции. В круглых скобках указывает ее аргументы, а фигурных скобах описываем ее логику.&nbsp;<code>Function Expression</code>&nbsp;&ndash; объявление функции в контексте какого-либо выражения, например присваивания.</p>

<p><strong>Основное отличие между ними: функции, объявленные как&nbsp;<code>Function Declaration</code>, создаются интерпретатором до выполнения кода.</strong>&nbsp;Поэтому ее можно спокойно вызвать до объявления, и это не вызовет ошибку. Происходит это благодаря механизму который называется&nbsp;<code>hoisting</code>&nbsp;или всплытие.</p>`,
  },
  {
    id: `43`,
    q: `Разница между null и undefined?`,
    a: `<p>Оба значения означают отсутствующие данные, только&nbsp;<code>undefined</code>&nbsp;представляет собой значение по умолчанию для:</p>

<ul>
	<li>переменной которой еще не было присвоено никого другого значения.</li>
	<li>функций, которая ничего не возвращает явно.</li>
	<li>несуществующего свойства объекта.</li>
</ul>

<p>Если обобщить, то данное значение присваивается интерпретатором в момент выполнения скрипта. Что же касается&nbsp;<code>null</code>&nbsp;- это явное задание отсутствующего значения, то есть когда разработчик самостоятельно определяет отсутствие каких либо данных.</p>`,
  },
  {
    id: `44`,
    q: `Что такое Hoisting?`,
    a: `<p><code>Hoisting</code>&nbsp;- это механизм поднятия функций или переменных в глобальную или функциональную область видимости. Это особенность движка Javascript. К переменным объявленным через&nbsp;<code>var</code>, а также к функциям&nbsp;<code>function declaration</code>&nbsp;можно получить доступ еще до объявления значения.</p>`,
  },
  {
    id: `45`,
    q: `Что такое область видимости (Scope)?`,
    a: `<p>Это место откуда мы имеем доступ к переменным или функциям. В Javascript есть три вида областей видимости:</p>

<ul>
	<li>Глобальная - переменные и функции объявленные в этой области становятся глобальными. Появляются в глобальном пространстве имен и доступны они из любого места в коде.</li>
	<li>Функциональная или локальная - переменные и функции объявленные внутри функции, доступны только этой функции и всем вложенным в нее функциям.</li>
	<li>Блочная - для переменных объявленных c помощью&nbsp;<code>let</code>&nbsp;и&nbsp;<code>const</code>. Такая область видимости находится внутри фигурных скобок. Переменные объявленные через&nbsp;<code>var</code>&nbsp;на такую область видимости не реагируют.</li>
</ul>`,
  },
  {
    id: `46`,
    q: `Разница между var, let и const?`,
    a: `<ul>
	<li>Переменные объявленные через&nbsp;<code>var</code>&nbsp;всплывают. Это значит, что если мы обратимся к переменной до момента ее инициализации, то получим просто&nbsp;<code>undefined</code>. В случае же с&nbsp;<code>let</code>&nbsp;и&nbsp;<code>const</code>&nbsp;мы получим ошибки.</li>
	<li>У них есть разные области видимости&nbsp;<code>let</code>&nbsp;и&nbsp;<code>const</code>&nbsp;ограничена блоком, а не функцией.</li>
	<li>Переменные объявленные через&nbsp;<code>const</code>&nbsp;невозможно переопределить.</li>
</ul>`,
  },
  {
    id: `47`,
    q: `Что такое Лексическое окружение (LexicalEnvironment)?`,
    a: `<ul>
	<li>
	<p><a href=""https://www.youtube.com/watch?v=GkmoRy0Kv14"" rel=""nofollow"">https://www.youtube.com/watch?v=GkmoRy0Kv14</a></p>

	<p>В JavaScript у каждой выполняемой функции, блока кода и скрипта есть связанный с ними внутренний (скрытый) объект, называемый лексическим окружением LexicalEnvironment.</p>

	<p>Объект лексического окружения состоит из двух частей:</p>

	<p>Environment Record &ndash; объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).</p>

	<p>Ссылка на внешнее лексическое окружение &ndash; то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).</p>

	<p>&quot;Переменная&quot; &ndash; это просто свойство специального внутреннего объекта: Environment Record. &laquo;Получить или изменить переменную&raquo;, означает, &laquo;получить или изменить свойство этого объекта&raquo;.</p>

	<p><strong>Один вызов &ndash; одно лексическое окружение</strong>&nbsp;Пожалуйста, обратите внимание, что новое лексическое окружение функции создаётся каждый раз, когда функция выполняется.</p>

	<p>И, если функция вызывается несколько раз, то для каждого вызова будет своё лексическое окружение, со своими, специфичными для этого вызова, локальными переменными и параметрами.</p>
	</li>
</ul>`,
  },
  {
    id: `48`,
    q: `Что такое замыкание (Closure)?`,
    a: `<ul>
	<li>
	<p>Замыкание &mdash; это комбинация функции и лексического окружения, в котором эта функция была определена. Другими словами, замыкание даёт вам доступ к Scope (en-US) внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при создании функции, во время её создания.</p>
	</li>
</ul>`,
  },
  {
    id: `49`,
    q: `Что обозначает this в JavaScript?`,
    a: `<ul>
	<li><strong>В глобальном контексте выполнения</strong>&nbsp;(за пределами каких-либо функций) this ссылается на глобальный объект вне зависимости от режима (строгий или нестрогий).</li>
	<li><strong>В пределах функции</strong>&nbsp;значение this зависит от того, каким образом вызвана функция:
	<ul>
		<li>в методах&nbsp;<code>this</code>&nbsp;ссылается на вызывающий его объект.</li>
		<li>вне объекта&nbsp;<code>this</code>&nbsp;всегда ссылается на глобальны объект в обычном режиме и является&nbsp;<code>undefined</code>&nbsp;в строгом режиме.</li>
		<li>в стрелочных функциях&nbsp;<code>this</code>&nbsp;ссылается на this внешней &quot;нормальной функции&quot;</li>
	</ul>
	</li>
</ul>`,
  },
  {
    id: `50`,
    q: `Event Loop. Асинхронность JavaScript`,
    a: `<ul>
	<li>
	<p><a href=""https://www.youtube.com/watch?v=LjrtNkFIWqI&amp;list=PLDqIkh1haws4QW9A0tAPY5YRa3Rr4CZgK&amp;index=4"" rel=""nofollow"">Лучшее объяснение в этом видео</a></p>

	<p><code>Event Loop</code>&nbsp;- это механизм среды выполнения&nbsp;<code>javascript</code>, который ожидает очистки стека вызовов, прежде чем отправлять обратные вызовы из очереди задач в стек вызовов. Как только стек очищен, цикл событий запускается и проверяет очередь задач на наличие доступных обратных вызовов. Если таковые имеются, он помещает их в стек вызовов, ждет, пока стек вызовов снова очистится, и повторяет тот же процесс.</p>

	<p>Вызов любой функции создаёт контекст выполнения (Execution Context). При вызове вложенной функции создаётся новый контекст, а старый сохраняется в специальной структуре данных - стеке вызовов (Call Stack).</p>
	</li>
</ul>`,
  },
  {
    id: `51`,
    q: `Операторы «И» и «ИЛИ» (&& и ||)?`,
    a: `<ul>
	<li>
	<p>&nbsp;</p>

	<table>
		<thead>
			<tr>
				<th>Оператор</th>
				<th>Использование</th>
				<th>Описание</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Логическое И (&amp;&amp;)</td>
				<td>expr1 &amp;&amp; expr2</td>
				<td>(Логическое И) Возвращает операнд expr1, если он может быть преобразован в false; в противном случае возвращает операнд expr2. Таким образом, при использовании булевых величин в качестве операндов, оператор &amp;&amp; возвращает true, если оба операнда true; в противном случае возвращает false.</td>
			</tr>
			<tr>
				<td>Логическое ИЛИ (||)</td>
				<td>expr1 || expr2</td>
				<td>(Логическое ИЛИ) Возвращает операнд expr1, если он может быть преобразован в true; в противном случае возвращает операнд expr2. Таким образом, при использовании булевых величин в качестве операндов, оператор || возвращает true, если один из операндов true; если же оба false, то возвращает false</td>
			</tr>
			<tr>
				<td>Логическое НЕ (!)</td>
				<td>!expr</td>
				<td>(Логическое НЕ) Возвращает false, если операнд может быть преобразован в true; в противном случае возвращает true.</td>
			</tr>
		</tbody>
	</table>
	</li>
</ul>`,
  },
  {
    id: `52`,
    q: `что такое DOM?`,
    a: `<ul>
	<li>
	<p><code>Document Object Model</code>, сокращённо DOM &ndash; объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять.</p>

	<p>Объект document &ndash; основная &laquo;входная точка&raquo;. С его помощью мы можем что-то создавать или менять на странице.</p>
	</li>
</ul>`,
  },
  {
    id: `53`,
    q: `что такое BOM?`,
    a: `<p>Объектная модель браузера (Browser Object Model, BOM) &ndash; это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.</p>

<p>Например:</p>

<ul>
	<li>Объект navigator даёт информацию о самом браузере и операционной системе. Среди множества его свойств самыми известными являются: navigator.userAgent &ndash; информация о текущем браузере, и navigator.platform &ndash; информация о платформе (может помочь в понимании того, в какой ОС открыт браузер &ndash; Windows/Linux/Mac и так далее).</li>
	<li>Объект location позволяет получить текущий URL и перенаправить браузер по новому адресу.</li>
</ul>`,
  },
  {
    id: `54`,
    q: `что такое CSSOM?`,
    a: `<p><code>CSS Object Model</code>&nbsp;представляет собой набор API-интерфейсов, позволяющих манипулировать CSS из JavaScript. Это очень похоже на DOM, но для CSS, а не HTML. Это позволяет пользователям динамически читать и изменять стиль CSS.</p>`,
  },
  {
    id: `55`,
    q: `Типы узлов в DOM?`,
    a: `<p>Существует&nbsp;<a href=""https://dom.spec.whatwg.org/#node"">12 типов узлов</a>. Но на практике мы в основном работаем с 4 из них:</p>

<ol>
	<li><code>document</code>&nbsp;&ndash; &laquo;входная точка&raquo; в DOM.</li>
	<li>узлы-элементы &ndash; HTML-теги, основные строительные блоки.</li>
	<li>текстовые узлы &ndash; содержат текст.</li>
	<li>комментарии &ndash; иногда в них можно включить информацию, которая не будет показана, но доступна в DOM для чтения JS.</li>
</ol>`,
  },
  {
    id: `56`,
    q: `Что такое ООП?`,
    a: `<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">ООП</span></span></strong><span style="font-size:12.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif"> - методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования.</span></span></span></span></p>`,
  },
  {
    id: `57`,
    q: `Назовите основные принципы ООП?`,
    a: `<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Основные принципы ООП:</span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">1. Инкапсуляция.</span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">2. Наследование</span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">3. Полиморфизм.</span></span></span></span></p>

<p><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">4. Абстракция.</span></span></p>`,
  },
  {
    id: `58`,
    q: `Что такое Инкапсуляция в ООП?`,
    a: `<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Инкапсуляция </span></span></strong><span style="font-size:12.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">&ndash; это объединение функций и данных в рамках одной структуры, внутреннее состояние которой (данные) скрыто от внешнего мира. <strong>Или не скрыто в зависимости от языка программирования. </strong></span></span></span></span></p>`,
  },
  {
    id: `59`,
    q: `Что такое Наследование в ООП?`,
    a: `<p><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:12.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Наследование</span></span></strong><span style="font-size:12.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif"> &ndash; механизм ООП позволяющий описать новый класс на основе уже существующего (родительского), при этом свойства и функциональность родительского класса заимствуются новым классом.</span></span></span></span></p>`,
  },
  {
    id: `60`,
    q: `Что такое Полиморфизм в ООП?`,
    a: `<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Полиморфизм</span></span></strong><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> - способность вызывать один и тот же метод для разных объектов, но каждый объект реагирует по-разному. </span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">На самом деле одинаковым является только имя метода, его исходный код зависит от класса.</span></span></span></span></p>`,
  },
  {
    id: `61`,
    q: `Что такое Абстракция в ООП?`,
    a: `<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Абстрация </span></span></strong><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">- это процесс создания простой модели более сложной сущности, которая представляет её наиболее важные аспекты таким образом, чтобы скрыть несущественные детали и показывает только то, что необходимо внешнему миру. </span></span></span></span></p>

<p><span style=""font-size:11pt""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:12.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Основная идея состоит в том, чтобы представить объект минимальным набором полей и методов и при этом с достаточной точностью для решаемой задачи.</span></span></span></span></p>`,
  },
  { id: `62`, q: `Что такое интерфейс?`, a: `` },
  { id: `63`, q: `Что такое абстрактный класс?`, a: `` },
  {
    id: `64`,
    q: `Чем отличается интерфейс от абстрактного класса?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Интерфейс описывает только поведение. У него нет состояния. А у абстрактного класса состояние есть: он описывает и то, и другое.</span></span></span></span></p>`,
  },
  {
    id: `65`,
    q: `Что такое База Данных?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><span style="font-size:10.5pt"><span style="background-color:white"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:#202122">Ба́за да́нных</span></span></span></span></strong><span style="font-size:10.5pt"><span style="background-color:white"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:#202122">&nbsp;&mdash; совокупность&nbsp;</span></span></span></span><a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5" style="color:#0563c1; text-decoration:underline" title="Данные"><span style="font-size:10.5pt"><span style="background-color:white"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:#0645ad">данных</span></span></span></span></a><span style="font-size:10.5pt"><span style="background-color:white"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:#202122">, хранимых в соответствии со&nbsp;</span></span></span></span><a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%85%D0%B5%D0%BC%D0%B0_%D0%B1%D0%B0%D0%B7%D1%8B_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85" style="color:#0563c1; text-decoration:underline" title="Схема базы данных"><span style="font-size:10.5pt"><span style="background-color:white"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:#0645ad">схемой данных</span></span></span></span></a><span style="font-family:&quot;Arial&quot;,sans-serif">.</span></span></span></p>`,
  },
  {
    id: `66`,
    q: `Какие есть типы БД?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Можно выделить три основных типа БД</span></span></span></span></p>

<p><strong><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">I. Простейшие типы баз данных.</span></span></span></span></strong></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">- Простые структуры данных</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">- Иерархические базы данных</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">- Сетевые базы данных</span></span></span></span></p>

<p><strong><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">II. Реляционные БД или SQL базы данных</span></span></span></span></strong></p>

<p><strong><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">III. NoSQL базы данных</span></span></span></span></strong></p>`,
  },
  {
    id: `67`,
    q: `Что такое реляционная база данных?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Реляционные базы данных</span></span></u></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> &ndash; данные и связи между данными организованы с помощью таблиц. Каждый столбец в таблице имеет уникальное для таблицы имя &nbsp;и тип. Каждая строка представляет отдельную запись, которая содержит значения для каждого из столбцов.</span></span></span></span></p>

<p>&nbsp;</p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Таблица отражает объект реального мира &ndash; <strong><u>сущность</u></strong>, а каждая ее строка отражает конкретный экземпляр сущности. </span></span></span></span></p>`,
  },
  {
    id: `68`,
    q: `Основные типы данных, используемые в моделях данных?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Основные типы данных, используемые в моделях данных:</span></span></u></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Short Integer</span></span></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">&ndash; короткое целое число;</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Long Integer</span></span></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">&ndash; длинное целое число;</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Float</span></span></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">&ndash; вещественное число (число с плавающей десятичной точкой);</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Double</span></span></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">&ndash; вещественное число (число с плавающей десятичной точкой) двойной точности;</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Text</span></span></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">&ndash; текстовый тип данных;</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Logical</span></span></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> - логический (да/нет);</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Data</span></span></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">- временной. Значение определяется как дата с установленным разделителем в установленном формате;</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Blob</span></span></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">&ndash; большие бинарные объекты (binary large object - BLOB), которые могут хранить данные неограниченного размера. Поля этого типа позволяют хранить безразмерную произвольную двоичную информацию.</span></span></span></span></p>`,
  },
  {
    id: `69`,
    q: `Что такое Первичный ключ в реляционной базе данных?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Первичный ключ</span></span></u></strong><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">&ndash;это атрибут, уникально идентифицирующий строки отношения. Первичный ключ из нескольких атрибутов называется составным. Первичный ключ не может быть полностью или частично пустым (иметь значение null).</span></span></span></span></p>`,
  },
  {
    id: `70`,
    q: `Что такое Внешний ключ в реляционной базе данных?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Внешний ключ</span></span></u></strong><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif"> &ndash; это атрибут (атрибуты), является ссылкой на первичный ключ другой таблицы </span></span></span></span></p>`,
  },
  {
    id: `71`,
    q: `Что такое Нормализация БД?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Нормализация </span></span></u></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">&mdash; это процесс организации данных в базе данных, включающий создание таблиц и установление отношений между ними в соответствии с правилами, которые обеспечивают защиту данных и делают базу данных более гибкой, устраняя избыточность и несогласованные зависимости.</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><em><strong>Избыточность</strong></em> данных приводит к непродуктивному расходованию свободного места на диске и затрудняет обслуживание баз данных.</span></span></span></span></p>`,
  },
  {
    id: `72`,
    q: `Что такое Денормализация БД?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif">Денормализация</span></span></u></strong><span style="font-size:11.0pt"><span style="font-family:&quot;Arial&quot;,sans-serif"> &mdash; намеренное приведение структуры базы данных в состояние, не удовлетворяющее требованиям нормализации.</span></span></span></span></p>`,
  },
  {
    id: `73`,
    q: `Что такое Транзакция в БД?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Транзакция</span></span></u></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> &mdash; это набор операций в базе данных, которые должны быть либо все выполнены, либо все не выполнены. Транзакции применяются для обеспечения безопасности, верности и непротиворечивости данных в таблице.</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Если любая часть транзакции выполнится неудачно, то будет произведен откат (rollback) всей транзакции в исходное состояние. А если все шаги будут выполнены успешно, то транзакция будет зафиксирована (committed).</span></span></span></span></p>`,
  },
  {
    id: `74`,
    q: `Что такое Блокировка записи в БД?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">Блокировка записи</span></span></u></strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""> - это метод предотвращения одновременного доступа к данным в базе данных, чтобы предотвратить противоречивые результаты</span></span></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">По области действия блокировки классифицируются на строчные, гранулярные и предикатные. По строгости блокировки разделяются на совместные (англ. shared) и исключительные (эксклюзивные, англ. exclusive). По логике реализации блокировки делятся на оптимистические и пессимистические.</span></span></span></span></p>`,
  },
  {
    id: `75`,
    q: `Что такое SQL?`,
    a: `<p><span style="font-size:12pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong><u><span style="font-family:&quot;Arial&quot;,sans-serif">SQL</span></u></strong><span style="font-family:&quot;Arial&quot;,sans-serif"> &mdash; это язык структурированных запросов (Structured Query Language), позволяющий хранить, манипулировать и извлекать данные из реляционных баз данных (далее &mdash; РБД, БД).</span></span></span></p>`,
  },
  {
    id: `76`,
    q: `Как создать таблицу в SQL?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">создание</span></span></span></u></strong><strong><u> </u></strong><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">таблицы</span></span></span></u></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">CREATE TABLE months (id int, name varchar(10), days int);</span></span></strong></span></span></p>`,
  },
  {
    id: `77`,
    q: `Как вставить данные в таблицу в SQL?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">ввод</span></span></span></u></strong><strong><u> </u></strong><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">данных</span></span></span></u></strong><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">:</span></span></span></u></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">INSERT INTO months VALUES (1,&#39;January&#39;,31);</span></span></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">INSERT INTO months (id,name,days) VALUES (2,&#39;February&#39;,29);</span></span></strong></span></span></p>`,
  },
  {
    id: `78`,
    q: `Как показать данные из таблицы в SQL?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">показать данные:</span></span></span></u></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">SELECT * FROM characters;</span></span></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">SELECT name, weapon FROM characters;</span></span></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">SELECT * FROM characters WHERE weapon = &#39;pistol&#39;;</span></span></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">SELECT *FROM albums WHERE genre = &#39;rock&#39; AND sales_in_millions &lt;= 50 ORDER BY released;</span></span></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">SELECT name, weapon FROM characters ORDER BY name DESC (<span style=""color:#7030a0"">ASC</span>);</span></span></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">SELECT * FROM albums WHERE genre IN (&#39;pop&#39;,&#39;soul&#39;);</span></span></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">SELECT * FROM albums WHERE released BETWEEN 1975 AND 1985;</span></span></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">SELECT * FROM albums WHERE album LIKE &#39;%R%&#39;;</span></span></strong></span></span></p>

<p>&nbsp;</p>`,
  },
  {
    id: `79`,
    q: `Как обновить данные в талице в SQL?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">обновление</span></span></span></u></strong><strong><u> </u></strong><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">данных</span></span></span></u></strong><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">:</span></span></span></u></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">UPDATE tv_series SET genre = &#39;drama&#39; WHERE name = &#39;Game of Thrones&#39;;</span></span></strong></span></span></p>

<p>&nbsp;</p>`,
  },
  { id: `80`, q: `Как удалить таблицу в SQL?`, a: `` },
  {
    id: `81`,
    q: `Как удалить данные в таблице в SQL?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">Удаление данных в таблице</span></span></span></u></strong><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">:</span></span></span></u></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">DELETE FROM tv_series WHERE id = 4;</span></span></strong></span></span></p>

<p>&nbsp;</p>`,
  },
  {
    id: `82`,
    q: `Как добавить столбец в таблицу в SQL?`,
    a: `<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">удаление таблицы</span></span></span></u></strong><strong><u><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:#7030a0"">:</span></span></span></u></strong></span></span></p>

<p><span style=""font-size:12pt""><span style=""font-family:&quot;Times New Roman&quot;,serif""><strong><span style=""font-size:11.0pt""><span style=""font-family:&quot;Arial&quot;,sans-serif"">TRUNCATE TABLE table_name;</span></span></strong></span></span></p>

<p>&nbsp;</p>`,
  },
  {
    id: `83`,
    q: `Что такое Массив?`,
    a: `<p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:11.5pt"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:black">Массив - </span></span></span></strong><span style="font-size:11.5pt"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:black">структура данных, хранящая набор значений (элементов массива), идентифицируемых по индексу или набору индексов</span></span></span></span></span></span></p>`,
  },
  {
    id: `84`,
    q: `Что такое Связный список?`,
    a: `<p><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:11.5pt"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:black">Связный список (связанный, список узлов и ссылок или указателей) (Linked List) - </span></span></span></strong><span style="font-size:11.5pt"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:black">это цепочечная структура данных, где каждый узел состоит из двух частей: данных узла и указателя на следующий узел. Связный список и условный массив являются линейными структурами данных с сериализованным хранилищем. Отличия состоят в следующем:</span></span></span></span></span></span></p>`,
  },
  {
    id: `85`,
    q: `Что такое Стек?`,
    a: `<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">Стек </span></span></span></strong><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">следует принципу LIFO (Last In First Out &mdash; последним вошел, первым вышел). Если вы сложили книги друг на друга, и захотели взять самую нижнюю книгу, то сначала возьмете верхнюю, затем следующую и т.д. Кнопка &laquo;Назад&raquo; в браузере позволяет перейти (вернуться) на предыдущую страницу.</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">Стек имеет следующие методы:</span></span></span></span></span></span></p>

<p style=""margin-left:38px"">&nbsp;</p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">&nbsp;- push: добавить новый элемент</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">&nbsp;- pop: удалить верхний элемент, вернуть его</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">&nbsp;- peek: вернуть верхний элемент</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">&nbsp;- length: вернуть количество элементов в стеке</span></span></span></span></span></span></p>

<p>&nbsp;</p>`,
  },
  {
    id: `86`,
    q: `Что такое Очередь?`,
    a: `<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">Очередь (кью) (Queue) - </span></span></span></strong><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">Очередь напоминает стек. Разница состоит в том, что очередь следует принципу FIFO (First In First Out &mdash; первым вошел, первым вышел). Когда вы стоите в очереди, первый в ней всегда будет первым.</span></span></span></span></span></span></p>

<p style=""margin-left:38px"">&nbsp;</p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">Очередь имеет следующие методы:</span></span></span></span></span></span></p>

<p style=""margin-left:38px"">&nbsp;</p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">enqueue: войти в очередь, добавить элемент в конец</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">dequeue: покинуть очередь, удалить первый элемент и вернуть его</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">front: получить первый элемент</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">isEmpty: проверить, пуста ли очередь</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">size: получить количество элементов в очереди</span></span></span></span></span></span></p>

<p>&nbsp;</p>`,
  },
  {
    id: `87`,
    q: `Что такое Хеш-таблица?`,
    a: `<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><strong><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">Хеш-таблица</span></span></span></strong><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black""> &mdash; это структура данных, которая строится по принципу ключ-значение. Из-за высокой скорости поиска значений по ключам, она используется в таких структурах, как Map, Dictionary и Object. Как показано на рисунке, хеш-таблица имеет hash function, преобразующую ключи в список номеров, которые используются как имена (значения) ключей. Время поиска значения по ключу может достигать O(1). Одинаковые ключи должны возвращать одинаковые значения &mdash; в этом суть функции хэширования.</span></span></span></span></span></span></p>

<p style=""margin-left:38px"">&nbsp;</p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">Хеш-таблица имеет следующие методы:</span></span></span></span></span></span></p>

<p style=""margin-left:38px"">&nbsp;</p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">add: добавить пару ключ/значение</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">remove: удалить пару</span></span></span></span></span></span></p>

<p style=""margin-left:38px""><span style=""font-size:11pt""><span style=""background-color:white""><span style=""font-family:Calibri,sans-serif""><span style=""font-size:11.5pt""><span style=""font-family:&quot;Arial&quot;,sans-serif""><span style=""color:black"">lookup: найти значение по ключу</span></span></span></span></span></span></p>

<p>&nbsp;</p>`,
  },
  {
    id: `88`,
    q: `Что такое Древовидная структура?`,
    a: `<p style="margin-left:38px"><span style="font-size:11pt"><span style="background-color:white"><span style="font-family:Calibri,sans-serif"><strong><span style="font-size:11.5pt"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:black">Древовидная структура &mdash; </span></span></span></strong><span style="font-size:11.5pt"><span style="font-family:&quot;Arial&quot;,sans-serif"><span style="color:black">это многослойная (многоуровневая) структура. Это также нелинейная структура, в отличие от массива, стека и очереди. Данная структура очень эффективна в части добавления и поиска элементов. Вот некоторые концепции древовидной структуры:</span></span></span></span></span></span></p>`,
  },
];

class App {
  constructor(data) {
    this.quesData = [...data];
    this.mainContainer = document.querySelector('main');
  }

  run() {
    this.container = this.createElement('div', ['main__wrapper'], '');

    this.quesData.map((ques) => {
      const quesWrapper = this.createElement('div', ['question__wrapper'], '');
      const quesElement = this.createElement(
        'p',
        ['question'],
        `${ques.id}:  ${ques.q}`
      );

      const answerElement = this.createDetailsElement(ques.a);
      quesWrapper.append(quesElement, answerElement);
      this.container.append(quesWrapper);
    });

    this.mainContainer.append(this.container);
  }

  createDetailsElement(innerText) {
    const elem = this.createElement(
      'details',
      ['details'],
      `<summary>ответ</summary>
       ${innerText}
      `
    );
    return elem;
  }

  createElement(tag, classList, innerHTML) {
    const elem = document.createElement(tag);

    classList.forEach((className) => {
      elem.classList.add(className);
    });

    elem.innerHTML = innerHTML;

    return elem;
  }
}

window.onload = () => {
  const app = new App(data);
  app.run();
};

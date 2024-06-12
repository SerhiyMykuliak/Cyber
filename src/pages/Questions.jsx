import "./Questions.scss"
import Question from '../components/Question/Question';



export default function Questions() {

	return(
		<div className="questions">

			<div className="content">
						
				<h1>Часті питання</h1>
				<h2>Послуга Інтернет</h2>

				<Question header={"Що таке пінг?"}>
					<p>Пінг (ping) — це проміжок часу, за який пакет, відісланий з Вашого комп’ютера, проходить до іншого комп’ютера в мережі і повертається назад.</p>    
					<p>Чим більший ping, тим більший, наприклад, час очікування, необхідний для відкриття інтернет-сторінки.</p>
					<p>Ping — також найвідоміша програма для перевірки швидкості доступу до тих чи інших ресурсів Інтернету. Її можна застосовувати в якості основного засобу, що визначає час обороту (round — trip time) пакетів до ресурсу маршрутом туди і назад.</p>
					<p>Ping можна і потрібно застосовувати у відношенні до будь-якого вузла Інтернету, в тому числі і при перевірці якості з’єднання. Однак потрібно пам’ятати, що ping працює з так званими сигнальними ICMP-пакетами, які передають повідомлення про помилки та інші проблеми, наприклад, «запитувана послуга недоступна» або «сайт не відповідає». Тому ping показує лише час затримки передачі ICMP-пакетів, сам факт їх передачі та рівень їх втрат на шляху до якого-небудь інтернет-ресурсу .</p>
					<p>Одночасно ping дозволяє швидко встановити наявність або відсутність проблем із з’єднанням на фізичному (обрив, пошкодження кабелю, вихід з ладу мережевої карти і т.п.) і програмному (наприклад, блокування всього мережевого трафіку через фаєрвол) рівнях.</p>
				</ Question>

				<Question header={"Яке програмне забезпечення на моєму ПК впливає на швидкість доступу в Інтернет?"}>
					<p>На швидкість доступу до мережі Internet впливає багато програм, які можуть бути встановлені на Вашому комп’ютері. Насамперед швидкість доступу визначає Інтернет-тариф, яким Ви користуєтеся. ТМ «Діскавері. Телебачення. Інтернет» пропонує усім користувачам пакети без тарифікації трафіку (безлімітні). Максимальна технічно можлива пропускна здатність каналу до абонента 1000 Мбіт/с (за технологією GPON).</p>    
					<p>Другий фактор — віруси та інші шкідливі програми. Висока вірусна активність на комп’ютері абонента створює паразитний і неконтрольований користувачем трафік. А це призводить до непомітного перевитрачання останнього. Деякі віруси можуть завантажити канали користувача на 99 % для відправки несанкціонованої пошти — спаму. Тому потрібно своєчасно і періодично оновлювати антивірусні програми і перевіряти свій комп’ютер на наявність шкідливого програмного забезпечення.</p>
					<p>Антивіруси і фаєрволи теж трохи зменшують швидкість, адже їх робота полягає у перевірці всієї інформації, яка йде з комп’ютера і приходить на нього, в тому числі і через Інтернет. Для такої перевірки їм потрібен якийсь час, що уповільнює обмін інформацією. Проте подібні «невеликі накладні витрати» цілком виправдані.</p>
					<p>Популярні в даний час програми для роботи в пірингових мережах (DC++, Torrent тощо) при некваліфікованому налаштуванні можуть не тільки помітно знизити швидкість обміну інформацією, а й вплинути на загальну працездатність комп’ютера. Тому якщо користувач працює в таких мережах, він повинен уважно налаштувати відповідні програми і враховувати їх мережеву активність при оцінці загальної швидкості своєї роботи в Інтернеті.</p>
					<p>Знижує швидкість обміну інформацією з Інтернетом й інше програмне забезпечення, встановлене на комп’ютері: автоматичне оновлення додатків і самої операційної системи у фоновому режимі, «маячки» ліцензійних програм. Використовуючи налаштування за замовчуванням, воно може без відома користувача з’єднуватися зі «своїми» серверами і приймати/передавати службові дані, що знижує загальну корисну швидкість з’єднання. Радимо Вам проводити ручне налаштування кожного додатка, звертаючи особливу увагу на процедуру і графік їх автоматичного оновлення.</p>
				</ Question>

				<Question header={"Як вимірювати швидкість доступу в Інтернет через браузер?"}>
					<p>Перевірити швидкість можна за допомогою сайту speedtest.net. На час перевірки швидкості бажано завершити роботу (призупинити) всього програмного забезпечення, що використовує підключення до Інтернету, а також тим чи іншим чином обмежує швидкість обміну: антивіруси (включаючи оновлення антивірусних баз) , оновлення Windows, брандмауери, менеджери завантаження, клієнти пірінгових мереж, програми обміну повідомленнями: Telegram, Viber і т.д.). На час проведення тестів швидкості повинні бути зупинені всі завантаження файлів та веб-сторінок.</p>
					<p>При наявності маршрутизаторів та іншого мережевого обладнання, яке є проміжною ланкою між комп’ютером користувача і мережею провайдера бажано тимчасово відмовитися від них.</p>
				</ Question>

				<Question header={"Я не користувався Інтернетом від початку місяця. Чи можна його активувати з середини місяця і як буде нараховуватися абонентська плата?"}>
					<p>Вартість усіх тарифних планів відповідає розрахунковому періоду — календарному місяцю.При активації послуги посеред розрахункового періоду перерахунок проводиться системою дискретно!</p>
					<p>Зверніть увагу, абонентська плата за користування Телебаченням нараховується за весь місяць, незалежно від активації Інтернету.</p>
				</ Question>

				<Question header={"Як призупинити користування послугою Інтернет?"}>
					<p>Ви можете призупинити користування послугою якщо на Вашому рахунку позитивний баланс. Зробити це можна кількома способами:</p>
					<p>За допомогою «Мій Діскавері» Абонента, розділ «Керування послугами».</p>
					<p>Звернутися до центру обслуговування, де слід подати заяву (з обов‘язковим наданням посвідчення особи — паспортом чи договором).</p>
				</ Question>

				<Question header={"Коли я повинен оплачувати за послугу Інтернет?"}>
					<p>Ми працюємо на передоплаті. У зв’язку з тим, що при проходженні платежів через каси банківських установ виникають затримки в ідентифікації платежів Абонентів до 5 днів, рекомендуємо оплачувати до 25-го числа місяця. Тоді інформація про платіж буде відображена на Особовому рахунку Абонента до початку розрахункового періоду (до 1 числа наступного місяця).</p>
					<p>В 00:00 при переході на новий календарний місяць у Вас знімається вся сума за комплексну послугу (Телебачення та Інтернет). Першочергово знімається абонентська плата за доступ до послуги кабельного телебачення. При наявності коштів на рахунку або при їх поступленні проводиться нарахування за пакет Інтернет за зниженими тарифами!</p>
				</ Question>

				<Question header={"Чому я не можу скористатися послугою «Очікуваний платіж»?"}>
					<p>Якщо Вам недоступна послуга «Очікуваний платіж», можливо, Ви порушили умови даної послуги. Щоб відновити послугу, зверніться з письмовою заявою в центр обслуговування.</p>
					<p>Варто зауважити, що послугою «Очікуваний платіж» можна скористатись протягом перших 5 днів місяця за умови якщо заборгованість по угоді становить не більше ніж 60 гривень.</p>
				</ Question>
				
				<h2>Послуга Телебачення</h2>

				<Question header={"Чому велика кількість цифрових каналів без перекладу?"}>
					<p>Сервіс цифрового телебачення має змогу передавати декілька звукових доріжок на каналі. Якщо у Вас велика кількість каналів транслюється без перекладу, потрібно в налаштуваннях телевізора чи цифрового тюнера обрати пріоритетною мовою звукової доріжки українську чи російську.</p>
				</ Question>

				<Question header={"Що означає маркування на телевізорі HDTV із зазначенням формату MPEG-4, чи обов’язково купляти телевізор саме з таким маркуванням?"}>
					<p>Цифрове телебачення включає в себе два формати: стандартної чіткості SD і високої чіткості HD. Ви можете дивитися програми у високій чіткості на цифровому телевізорі стандартної чіткості або на кінескопному телевізорі з приєднаним тюнером, однак вони не відтворять канали з найвищою якістю зображення — HD. Відповідно, якщо Ви хочете переглядати канали HD і відчути різницю у якості зображення, то рекомендується все-таки придбання телевізора з позначкою MPEG-4.</p>
				</ Question>
				
				<Question header={"Чим відрізняються стандарти DVB-C, DVB-H, DVB-T, DVB-S?"}>
					<p>DVB-C, DVB-C2  (Cable – кабель) — поширення цифрового телевізійного сигналу кабельними мережами.</p>
					<p>DVB-H (handheld – портативний) — наземне поширення цифрового телевізійного сигналу на мобільні телефони.</p>
					<p>DVB-T, DVB-T2 (terrestrial – ефір) —  поширення цифрового телевізійного сигналу через ефір.</p>
					<p>DVB-S, DVB-S2  (satellite – супутник) — поширення  цифрового телевізійного сигналу через супутник.</p>
					<p>Виробники телевізійних приймачів загалом виробляють одну модель телевізора для продажу в декількох державах, тому телевізор однакової моделі можуть мати цифровий тюнер або DVB-C, або DVB-T, або DVB-T/С, або не мати взагалі жодного. Отримати інформацію про наявність цифрового тюнера можна з таблиці моделей в інструкції до Вашого телевізора, знайшовши повну назву телеприймача.</p>
				</ Question>
				
				<Question header={"Як дізнатися чи потрібно мені придбати спеціальний цифровий тюнер для перегляду цифрового Телебачення?"}>
					<p>Якщо у Вас телевізор кінескопний, то для перегляду цифрового кабельного телебачення Вам необхідно встановити цифровий (зовнішній) тюнер. З технічними характеристиками тюнерів можна ознайомитися і замовити встановлення тюнера з його налаштуванням в центрі обслуговування ТМ «Діскавері.Телебачення.Інтернет» за тел. 777-000.</p>
					<p>Якщо у Вас телевізор з плоским екраном (PDP – плазмова панель, LCD – екран на рідких кристалах, LED – дисплей, побудований з світло діодів), то зверніть увагу на маркування на корпусі, біля екрану: «Integrated Digital Tuner» — інтегрований цифровий тюнер, «Digital Tuner Built-In» — вбудований цифровий тюнер, «Digital Receiver» — цифровий ресивер, «Digital Tuner» — цифровий тюнер — такі маркування з зазначенням формату DVB-C свідчать про те, що у телевізорі вже є вмонтований цифровий тюнер і для прийому цифрового телебачення ТМ «Діскавері.Телебачення.Інтернет» Вам потрібно тільки встановити CAM-модуль з карточкою доступу. Про можливість отримання CAM-модуля проконсультуйтесь в центрі обслуговування ТМ «Діскавері.Телебачення.Інтернет» за тел. 777-000.</p>
					<p>Якщо Ваш телевізор містить маркування: «Digital Monitor» — цифровий монітор, «HDTV Monitor» — монітор HDTV, «Digital Ready» — готовий до прийому цифри, «HDTV Ready» — готовий до HDTV — це не означає, що він має вмонтований цифровий тюнер.</p>
				</ Question>
				<Question header={"Як призупинити користування послугами Телебачення?"}>
					<p>Ви можете призупинити користування послугою, якщо на вашому рахунку позитивний баланс. Зробити це можна, звернувшись до центру обслуговування, де слід подати заяву (з обов‘язковим наданням посвідчення особи).</p>
				</ Question>

			</div>

		</div>

	)
	
}
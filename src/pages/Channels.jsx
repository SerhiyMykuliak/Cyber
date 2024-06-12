import "./Channels.scss"

const channels = [
  { number: 1, name: 'Перший HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 2, name: '1+1 Україна HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 3, name: '1+1 HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 4, name: 'ICTV2 HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 5, name: 'Інтер HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 6, name: 'СТБ HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 7, name: 'Новий канал HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 8, name: '2+2 HD', category: 'розважальний', format: 'HD', digital: true, analog: true },
  { number: 9, name: 'TET HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 10, name: 'ICTV HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 11, name: 'Мега HD', category: 'розважальний', format: 'HD', digital: true, analog: true },
  { number: 12, name: 'Київ ТБ', category: 'загальноформатний', format: 'HD', digital: false, analog: false },
  { number: 13, name: 'НТН HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 14, name: 'Апостроф HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 15, name: 'УНІАН HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 16, name: '5 канал HD', category: 'загальноформатний', format: 'HD', digital: true, analog: true },
  { number: 17, name: 'OBOZREVATEL HD', category: 'фільмовий', format: 'HD', digital: true, analog: false },
];


export default function Channels() {
  return (
    <div className="channels">
      <div className="content">
        <h1>Доступні канали</h1>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Номер</th>
                <th>Канал</th>
                <th>Тематика</th>
                <th>Формат</th>
                <th>Цифрове ТБ</th>
                <th>Аналогове ТБ</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((channel, index) => (
                <tr key={index}>
                  <td>{channel.number}</td>
                  <td>{channel.name}</td>
                  <td>{channel.category}</td>
                  <td>{channel.format}</td>
                  <td>{channel.digital ? "•" : ""}</td>
                  <td>{channel.analog ? "•" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

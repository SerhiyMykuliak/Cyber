import "./Table.scss";

export default function Table({ title, services }) {
  return (
    <div className="table">
      
      <div className="table__title">{title}</div>
        {services.map((service, index) => (
          <div className="table__row" key={index}>
            <div className="table__name">{service.name}</div>
            <div className="table__speed">{service.description}</div>
            <div className="table__price">{service.price} {Number.isInteger(service.price) && ("грн/міс")}</div>
          </div>
        ))}
    </div>
  )
}

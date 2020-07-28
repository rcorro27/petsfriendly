
const Boutton = ({ type, id, name, value }) => (
    <div>
        <label htmlFor={id}>{type}</label>
        <Boutton
            type={type}
            id={id}
            name={name}
            value={value}
        />
    </div>
)
export default Boutton

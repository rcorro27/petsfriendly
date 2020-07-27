
const Boutton = ({ submit, type, id, name, value }) => (
    <div>
        <label htmlFor={id}>{submit}</label>
        <Boutton
            type={type}
            id={id}
            name={name}
            value={value}
        />
    </div>
)
export default Boutton

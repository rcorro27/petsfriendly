// AHmed il y a vait un petit erreur dans le code tavais ecris <boutton dans ton tag a la ligne 6 (ce pas un tag html valide :), ca allait jamais marcher! )
// JSX te permet de creer des composantes avec un format de tag html :)
// J'ai changer le parametre submit pour text pour pouvoir le reuitiliser
const Boutton = ({ text, type, id, name, value }) => (
    <div>
        <label htmlFor={id}>{text}</label>
        <button
            type={type}
            id={id}
            name={name}
            value={value}
        />
    </div>
)
export default Boutton

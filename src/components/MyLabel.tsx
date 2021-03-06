import  './myLabel.css';

export interface MyLabelProps {
    /**
    * Si quiere todo capitalizado.
    */
    allCaps?: boolean;
    /**
    * Este es el color de la etiqueta.
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Este es el mensaje que se mostrará en la etiqueta.
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta.
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Color personalizado de la fuente
    */
    fontColor?: string;
    
    /**
    * Color personalizado del fondo
    */
    backgroundColor?: string;

}

export const MyLabel = ({ 
    allCaps = false,
    color   = 'primary',
    label   = 'No label', 
    size    = 'normal',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span 
            className={`label ${size} text-${color}`}
            style={{ color: fontColor, backgroundColor }}
        >
            {
                allCaps ? label.toUpperCase() : label
            }
        </span>
    )
}

export default MyLabel;

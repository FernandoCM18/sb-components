/// <reference types="react" />
import './myLabel.css';
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
    size: 'normal' | 'h1' | 'h1' | 'h3';
    /**
    * Color personalizado de la fuente
    */
    fontColor?: string;
    /**
    * Color personalizado del fondo
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;

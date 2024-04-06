export class Regex {
    // https://stackoverflow.com/a/46127278 - french number
    static french_phone_number = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
    static siren = /^\d{9}$/;
    static installationID = /^\d{6}$/;
}
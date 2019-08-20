
/**
 * Helper for string
 */
export class HelperString {

   /**
    * Generate random string
    * @param length Size of string
    */
   public static Random(length: number = 8) {
      if (length < 0) {
         throw new Error('the length must be greater than 0');
      }
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }

   /**
    * Complete size of string
    * @param text string to process
    * @param size size of final string
    * @param value character to add
    */
   public static CompleteString(text: string, size: number, value: string) {
      if (text.length < size) {
         for (let index = 0; index < size - text.length; index++) {
            text += value;
         }
      }
      return text;
   }

}

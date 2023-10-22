public class Roman {

    public static int romanToInteger(String s) {
        int output = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char ch = s.charAt(i);
            int value;

            switch (ch) {
                case 'I':
                    value = 1;
                    break;
                case 'V':
                    value = 5;
                    break;
                case 'X':
                    value = 10;
                    break;
                case 'L':
                    value = 50;
                    break;
                case 'C':
                    value = 100;
                    break;
                case 'D':
                    value = 500;
                    break;
                case 'M':
                    value = 1000;
                    break;
                default:
                    throw new IllegalArgumentException("Invalid Roman numeral");
            }

            if (value < prevValue) {
                output -= value;
            } else {
                output += value;
            }

            prevValue = value;
        }

        return output;
    }

    public static void main(String[] args) {
        String romanNumber = "XII";
        int result = romanToInteger(romanNumber);
        System.out.println("The integer value of " + romanNumber + " is: " + result);

    }
}

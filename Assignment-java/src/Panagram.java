public class Panagram {

    public static boolean isPanagram(String input) {
        input = input.toLowerCase();
        boolean alphaValue[] = new boolean[26];

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                alphaValue[ch - 97] = true;
            }
        }
        for (int i = 0; i < 26; i++) {
            if (!alphaValue[i])
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        String input = "This is the Coding Assignment For Associate Software Engineer which is given by CloudVandana";

        boolean result = isPanagram(input);

        if (result) {
            System.out.println("The input is a panagram");
        } else {
            System.out.println("The input is not a panagram");
        }
    }
}

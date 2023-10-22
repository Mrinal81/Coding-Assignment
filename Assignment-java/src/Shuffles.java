import java.util.Random;

public class Shuffles {

    public static void shuffleArray(int[] arr) {
        Random index = new Random();
        int n = arr.length;

        for (int i = n - 1; i > 0; i--) {
            int j = index.nextInt(i + 1);

            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
        shuffleArray(arr);

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);

            if (i < arr.length - 1) {
                System.out.print(", ");
            }
        }
    }
}

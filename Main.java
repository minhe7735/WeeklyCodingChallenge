import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] input = {9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5};
        largestGap(input);
    }

    private static void largestGap(int[] arr){
        Arrays.sort(arr);

        int largest = 0;
        int prev = arr[0];

        for(int num : arr){
            largest = Math.max(largest, num - prev);
            prev = num;
        }

        System.out.println(largest);
    }
}

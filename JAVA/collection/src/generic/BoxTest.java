package generic;

public class BoxTest {
    public static void main(String[] args) {
        // String형 사용
        Box<String> box1 = new Box<>();

        box1.set("Good Luck!");
        System.out.println(box1.get());

        // Integer형 사용
        Box<Integer> box2 = new Box<>();

        box2.set(12);
        Integer num = box2.get();
        System.out.println(num);

        // Car 클래스 사용
        Box<Car> box3 = new Box<>();

        box3.set(new Car("IONIC6"));
        Car car = box3.get();
        System.out.println(car);
    }
}

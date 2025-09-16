package generic;

public class Car {
    String model;

    Car(String model) {
        this.model = model;
    }

    // 객체의 문자열 정보
    @Override
    public String toString() {
        return model;
    }
}

#include <AccelStepper.h>
#include <ESP32Servo.h>

// Define motor interface type
#define DRIVER 1 // 1 = Driver mode for STEP and DIR pins

// Define pins for DRV8825
#define DIR_PIN 12  // Direction pin connected to GPIO 12
#define STEP_PIN 14 // Step pin connected to GPIO 14

// Create an AccelStepper object
AccelStepper stepper(DRIVER, STEP_PIN, DIR_PIN);

// Recommended PWM GPIO pins on the ESP32 include 2,4,12-19,21-23,25-27,32-33
int servoPin = 13;

// create servo object to control a servo
Servo myservo;

// variable to store the servo position
int pos = 0;

void servoControl(int startPos, int endPos, int delayMs);

void setup()
{
  // Allow allocation of all timers
  ESP32PWM::allocateTimer(0);
  ESP32PWM::allocateTimer(1);
  ESP32PWM::allocateTimer(2);
  ESP32PWM::allocateTimer(3);
  myservo.setPeriodHertz(50);          // standard 50 hz servo
  myservo.attach(servoPin, 500, 2400); // attaches the servo on pin 18 to the servo object

  // Set motor speed and acceleration
  stepper.setMaxSpeed(250);     // Set maximum speed (steps per second)
  stepper.setAcceleration(100); // Set acceleration (steps per second^2)

  // Initialize Serial communication
  Serial.begin(115200);
  Serial.println("ESP32 Ready");
}

void loop()
{
  if (Serial.available()) // Check if data is available in the Serial Monitor
  {
    String input = Serial.readStringUntil('\n'); // Read input until newline character
    input.trim();                                // Remove any extra spaces or newline characters

    if (input == "1")
    {
      Serial.println("1. Motor moving forward +260 steps...");
      stepper.moveTo(260);     // Move 260 steps forward
      stepper.runToPosition(); // Block until the move is completed
      Serial.println("1.1 Motor forward movement complete.");

      delay(1000);

      Serial.println("2 Deploying Arm");
      // Move servo from 80° to 180° with 20ms delay
      servoControl(80, 180, 15);
      Serial.println("2.2 Deployment Successful");

      // Small pause before reversing
      delay(1000);

      Serial.println("3 Motor moving backward -260 steps...");
      stepper.moveTo(-260);    // Move 260 steps backward
      stepper.runToPosition(); // Block until the move is completed
      Serial.println("3.2 Motor backward movement complete.");

      // Small pause before reversing
      delay(1000);

      Serial.println("4 Retracting Arm");
      // Move servo from 80° to 180° with 20ms delay
      servoControl(180, 80, 15);
      Serial.println("4.2 Retraction Successful");
    }
    else
    {
      Serial.println("Invalid input. Enter '1' to move the motor.");
    }
  }
}

void servoControl(int startPos, int endPos, int delayMs)
{
  // Move servo from startPos to endPos
  if (startPos < endPos)
  {
    for (int pos = startPos; pos <= endPos; pos += 1)
    {
      // Move servo to the current position
      myservo.write(pos);

      // Wait for the servo to reach the position
      delay(delayMs);
    }
  }

  else if (startPos > endPos)
  {
    for (int pos = startPos; pos >= endPos; pos -= 1)
    {
      // Move servo to the current position
      myservo.write(pos);

      // Wait for the servo to reach the position
      delay(delayMs);
    }
  }
}

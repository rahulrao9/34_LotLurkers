int trigPin1=2;
int echoPin1=3;

int trigPin2=5;
int echoPin2=4;

int trigPin3=7;
int echoPin3=6;

int trigPin4=9;
int echoPin4=8;

int trigPin5=11;
int echoPin5=10;

void setup() {
  Serial.begin (9600);
  pinMode(trigPin1, OUTPUT);
  pinMode(echoPin1, INPUT);
   pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);
   pinMode(trigPin3, OUTPUT);
  pinMode(echoPin3, INPUT);
   pinMode(trigPin4, OUTPUT);
  pinMode(echoPin4, INPUT);
   pinMode(trigPin5, OUTPUT);
  pinMode(echoPin5, INPUT);

}

void loop() {

  long duration1, distance1;
  digitalWrite(trigPin1, LOW);  // Added this line
  delayMicroseconds(2); // Added this line
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10); // Added this line
  digitalWrite(trigPin1, LOW);
  duration1 = pulseIn(echoPin1, HIGH);
  distance1 = (duration1/2) / 29.1;

   if ( distance1 <= 10){
    Serial.println("0 0");
  }
  else {
    Serial.println("0 1");
  }

  delay(200);
  long duration2, distance2;
  digitalWrite(trigPin2, LOW);  // Added this line
  delayMicroseconds(2); // Added this line
  digitalWrite(trigPin2, HIGH);
  delayMicroseconds(10); // Added this line
  digitalWrite(trigPin2, LOW);
  duration2 = pulseIn(echoPin2, HIGH);
  distance2= (duration2/2) / 29.1;

   if ( distance2 <= 10){
    Serial.println("1 0");
  }
  else {
    Serial.println("1 1");
  }
  
  delay(200);
  long duration3, distance3;
  digitalWrite(trigPin3, LOW);  // Added this line
  delayMicroseconds(2); // Added this line
  digitalWrite(trigPin3, HIGH);
  delayMicroseconds(10); // Added this line
  digitalWrite(trigPin3, LOW);
  duration3 = pulseIn(echoPin3, HIGH);
  distance3= (duration3/2) / 29.1;

   if (distance3 <= 10){
    Serial.println("2 0");
  }
  else {
    Serial.println("2 1");
  }

  delay(200);
  long duration4, distance4;
  digitalWrite(trigPin4, LOW);  // Added this line
  delayMicroseconds(2); // Added this line
  digitalWrite(trigPin4, HIGH);
  delayMicroseconds(10); // Added this line
  digitalWrite(trigPin4, LOW);
  duration4 = pulseIn(echoPin4, HIGH);
  distance4= (duration4/2) / 29.1;

   if (distance4 <= 10){
    Serial.println("3 0");
  }
  else {
    Serial.println("3 1");
  }

  delay(200);
  long duration5, distance5;
  digitalWrite(trigPin5, LOW);  // Added this line
  delayMicroseconds(2); // Added this line
  digitalWrite(trigPin5, HIGH);
  delayMicroseconds(10); // Added this line
  digitalWrite(trigPin5, LOW);
  duration5 = pulseIn(echoPin5, HIGH);
  distance5= (duration5/2) / 29.1;

   if ( distance5 <= 10){
    Serial.println("4 0");
  }
  else {
    Serial.println("4 1");
  }

  delay(200);
}
![[assets/041 heart-disease.csv]]

## About Dataset

### Context

This data set dates from 1988 and consists of four databases: Cleveland, Hungary, Switzerland, and Long Beach V. It contains 76 attributes, including the predicted attribute, but all published experiments refer to using a subset of 14 of them. The "target" field refers to the presence of heart disease in the patient. It is integer valued 0 = no disease and 1 = disease.

### Content

##### Attribute Information:

1. age
2. sex
3. chest pain type (4 values)
4. resting blood pressure
5. serum cholestoral in mg/dl
6. fasting blood sugar > 120 mg/dl
7. resting electrocardiographic results (values 0,1,2)
8. maximum heart rate achieved
9. exercise induced angina
10. oldpeak = ST depression induced by exercise relative to rest
11. the slope of the peak exercise ST segment
12. number of major vessels (0-3) colored by flourosopy
13. thal: 0 = normal; 1 = fixed defect; 2 = reversable defect  
    The names and social security numbers of the patients were recently removed from the database, replaced with dummy values.
### Detailed 

- **Age**:
    
    - The age of the patient in years. Age is a crucial factor in assessing cardiovascular risk.
- **Sex**:
    
    - The biological sex of the patient, typically coded as:
        - `1`: Male
        - `0`: Female
    - Sex can influence the risk and presentation of heart disease.
- **Chest Pain Type**:
    
    - The type of chest pain experienced by the patient, usually categorized into four types:
        1. **Typical Angina**: Chest pain related to decreased blood flow to the heart.
        2. **Atypical Angina**: Chest pain not directly related to coronary artery disease.
        3. **Non-Anginal Pain**: Chest pain not associated with heart disease.
        4. **Asymptomatic**: No chest pain.
- **Resting Blood Pressure**:
    
    - The patient’s blood pressure when at rest, measured in millimeters of mercury (mm Hg). High resting blood pressure can indicate hypertension, a risk factor for heart disease.
- **Serum Cholesterol in mg/dl**:
    
    - The cholesterol level in the patient’s blood, measured in milligrams per deciliter (mg/dl). High cholesterol levels can lead to plaque buildup in arteries, increasing the risk of heart disease.
- **Fasting Blood Sugar > 120 mg/dl**:
    
    - A binary indicator (1 or 0) showing whether the patient’s fasting blood sugar is greater than 120 mg/dl:
        - `1`: Yes
        - `0`: No
    - Elevated fasting blood sugar can be a sign of diabetes, which is a significant risk factor for heart disease.
- **Resting Electrocardiographic Results**:
    
    - The results of an ECG (electrocardiogram) taken while the patient is at rest, usually coded as:
        - `0`: Normal
        - `1`: Having ST-T wave abnormality (e.g., T wave inversions and/or ST elevation or depression of > 0.05 mV)
        - `2`: Showing probable or definite left ventricular hypertrophy by Estes' criteria.
- **Maximum Heart Rate Achieved**:
    
    - The highest heart rate (in beats per minute) achieved during exercise. Higher values can indicate better cardiovascular fitness.
- **Exercise Induced Angina**:
    
    - A binary indicator (1 or 0) showing whether the patient experienced angina (chest pain) during exercise:
        - `1`: Yes
        - `0`: No
- **Oldpeak**:
    
    - The amount of ST segment depression induced by exercise relative to rest, measured in millimeters. This reflects the severity of ischemia (reduced blood flow to the heart).
- **The Slope of the Peak Exercise ST Segment**:
    
    - Describes the slope of the ST segment during peak exercise:
        - `1`: Upsloping
        - `2`: Flat
        - `3`: Downsloping
    - The slope can indicate different levels of heart stress during exercise, with downsloping often being more concerning.
- **Number of Major Vessels (0-3) Colored by Fluoroscopy**:
    
    - The number of major coronary arteries (ranging from 0 to 3) that are visible (colored) during fluoroscopy, a type of imaging used to see the blood vessels. A higher number can indicate more extensive coronary artery disease.
- **Thal**:
    
    - Describes a specific type of abnormality found in a thallium stress test, coded as:
        - `0`: Normal (no defect)
        - `1`: Fixed defect (a defect that doesn’t change with exercise, possibly indicating an old heart attack)
        - `2`: Reversible defect (a defect that appears during exercise but not at rest, indicating ischemia or reversible heart damage)
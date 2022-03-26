const diseaselist = [
    {
      value: "abdominal_pain",
      label: "Abdominal Pain"
    },
    {
      value: "abnormal_menstruation",
      label: "Abnormal Menstruation"
    },
    {
      value: "acidity",
      label: "Acidity"
    },
    {
      value: "acute_liver_failure",
      label: "Acute Liver Failure"
    },
    {
      value: "altered_sensorium",
      label: "Altered Sensorium"
    },
    {
      value: "anxiety",
      label: "Anxiety"
    },
    {
      value: "back_pain",
      label: "Back Pain"
    },
    {
      value: "belly_pain",
      label: "Belly Pain"
    },
    {
      value: "blackheads",
      label: "Blackheads"
    },
    {
      value: "bladder_discomfort",
      label: "Bladder Discomfort"
    },
    {
      value: "blister",
      label: "Blister"
    },
    {
      value: "blood_in_sputum",
      label: "Blood In Sputum"
    },
    {
      value: "bloody_stool",
      label: "Bloody Stool"
    },
    {
      value: "blurred_and_distorted_vision",
      label: "Blurred And Distorted Vision"
    },
    {
      value: "breathlessness",
      label: "Breathlessness"
    },
    {
      value: "brittle_nails",
      label: "Brittle Nails"
    },
    {
      value: "bruising",
      label: "Bruising"
    },
    {
      value: "burning_micturition",
      label: "Burning Micturition"
    },
    {
      value: "chest_pain",
      label: "Chest Pain"
    },
    {
      value: "chills",
      label: "Chills"
    },
    {
      value: "cold_hands_and_feets",
      label: "Cold Hands And Feets"
    },
    {
      value: "coma",
      label: "Coma"
    },
    {
      value: "congestion",
      label: "Congestion"
    },
    {
      value: "constipation",
      label: "Constipation"
    },
    {
      value: "continuous_feel_of_urine",
      label: "Continuous Feel Of Urine"
    },
    {
      value: "continuous_sneezing",
      label: "Continuous Sneezing"
    },
    {
      value: "cough",
      label: "Cough"
    },
    {
      value: "cramps",
      label: "Cramps"
    },
    {
      value: "dark_urine",
      label: "Dark Urine"
    },
    {
      value: "dehydration",
      label: "Dehydration"
    },
    {
      value: "depression",
      label: "Depression"
    },
    {
      value: "diarrhoea",
      label: "Diarrhoea"
    },
    {
      value: "dischromic_patches",
      label: "Dischromic Patches"
    },
    {
      value: "distention_of_abdomen",
      label: "Distention Of Abdomen"
    },
    {
      value: "dizziness",
      label: "Dizziness"
    },
    {
      value: "drying_and_tingling_lips",
      label: "Drying And Tingling Lips"
    },
    {
      value: "enlarged_thyroid",
      label: "Enlarged Thyroid"
    },
    {
      value: "excessive_hunger",
      label: "Excessive Hunger"
    },
    {
      value: "extra_marital_contacts",
      label: "Extra Marital Contacts"
    },
    {
      value: "family_history",
      label: "Family History"
    },
    {
      value: "fast_heart_rate",
      label: "Fast Heart Rate"
    },
    {
      value: "fatigue",
      label: "Fatigue"
    },
    {
      value: "fluid_overload",
      label: "Fluid Overload"
    },
    {
      value: "foul_smell_ofurine",
      label: "Foul Smell Ofurine"
    },
    {
      value: "headache",
      label: "Headache"
    },
    {
      value: "high_fever",
      label: "High Fever"
    },
    {
      value: "hip_joint_pain",
      label: "Hip Joint Pain"
    },
    {
      value: "history_of_alcohol_consumption",
      label: "History Of Alcohol Consumption"
    },
    {
      value: "increased_appetite",
      label: "Increased Appetite"
    },
    {
      value: "indigestion",
      label: "Indigestion"
    },
    {
      value: "inflammatory_nails",
      label: "Inflammatory Nails"
    },
    {
      value: "internal_itching",
      label: "Internal Itching"
    },
    {
      value: "irregular_sugar_level",
      label: "Irregular Sugar Level"
    },
    {
      value: "irritability",
      label: "Irritability"
    },
    {
      value: "irritation_in_anus",
      label: "Irritation In Anus"
    },
    {
      value: "itching",
      label: "Itching"
    },
    {
      value: "joint_pain",
      label: "Joint Pain"
    },
    {
      value: "knee_pain",
      label: "Knee Pain"
    },
    {
      value: "lack_of_concentration",
      label: "Lack Of Concentration"
    },
    {
      value: "lethargy",
      label: "Lethargy"
    },
    {
      value: "loss_of_appetite",
      label: "Loss Of Appetite"
    },
    {
      value: "loss_of_balance",
      label: "Loss Of Balance"
    },
    {
      value: "loss_of_smell",
      label: "Loss Of Smell"
    },
    {
      value: "malaise",
      label: "Malaise"
    },
    {
      value: "mild_fever",
      label: "Mild Fever"
    },
    {
      value: "mood_swings",
      label: "Mood Swings"
    },
    {
      value: "movement_stiffness",
      label: "Movement Stiffness"
    },
    {
      value: "mucoid_sputum",
      label: "Mucoid Sputum"
    },
    {
      value: "muscle_pain",
      label: "Muscle Pain"
    },
    {
      value: "muscle_wasting",
      label: "Muscle Wasting"
    },
    {
      value: "muscle_weakness",
      label: "Muscle Weakness"
    },
    {
      value: "nausea",
      label: "Nausea"
    },
    {
      value: "neck_pain",
      label: "Neck Pain"
    },
    {
      value: "nodal_skin_eruptions",
      label: "Nodal Skin Eruptions"
    },
    {
      value: "obesity",
      label: "Obesity"
    },
    {
      value: "pain_behind_the_eyes",
      label: "Pain Behind The Eyes"
    },
    {
      value: "pain_during_bowel_movements",
      label: "Pain During Bowel Movements"
    },
    {
      value: "pain_in_anal_region",
      label: "Pain In Anal Region"
    },
    {
      value: "painful_walking",
      label: "Painful Walking"
    },
    {
      value: "palpitations",
      label: "Palpitations"
    },
    {
      value: "passage_of_gases",
      label: "Passage Of Gases"
    },
    {
      value: "patches_in_throat",
      label: "Patches In Throat"
    },
    {
      value: "phlegm",
      label: "Phlegm"
    },
    {
      value: "polyuria",
      label: "Polyuria"
    },
    {
      value: "prominent_veins_on_calf",
      label: "Prominent Veins On Calf"
    },
    {
      value: "puffy_face_and_eyes",
      label: "Puffy Face And Eyes"
    },
    {
      value: "pus_filled_pimples",
      label: "Pus Filled Pimples"
    },
    {
      value: "receiving_blood_transfusion",
      label: "Receiving Blood Transfusion"
    },
    {
      value: "receiving_unsterile_injections",
      label: "Receiving Unsterile Injections"
    },
    {
      value: "red_sore_around_nose",
      label: "Red Sore Around Nose"
    },
    {
      value: "red_spots_over_body",
      label: "Red Spots Over Body"
    },
    {
      value: "redness_of_eyes",
      label: "Redness Of Eyes"
    },
    {
      value: "restlessness",
      label: "Restlessness"
    },
    {
      value: "runny_nose",
      label: "Runny Nose"
    },
    {
      value: "rusty_sputum",
      label: "Rusty Sputum"
    },
    {
      value: "scurring",
      label: "Scurring"
    },
    {
      value: "shivering",
      label: "Shivering"
    },
    {
      value: "silver_like_dusting",
      label: "Silver Like Dusting"
    },
    {
      value: "sinus_pressure",
      label: "Sinus Pressure"
    },
    {
      value: "skin_peeling",
      label: "Skin Peeling"
    },
    {
      value: "skin_rash",
      label: "Skin Rash"
    },
    {
      value: "slurred_speech",
      label: "Slurred Speech"
    },
    {
      value: "small_dents_in_nails",
      label: "Small Dents In Nails"
    },
    {
      value: "spinning_movements",
      label: "Spinning Movements"
    },
    {
      value: "spotting_urination",
      label: "Spotting Urination"
    },
    {
      value: "stiff_neck",
      label: "Stiff Neck"
    },
    {
      value: "stomach_bleeding",
      label: "Stomach Bleeding"
    },
    {
      value: "stomach_pain",
      label: "Stomach Pain"
    },
    {
      value: "sunken_eyes",
      label: "Sunken Eyes"
    },
    {
      value: "sweating",
      label: "Sweating"
    },
    {
      value: "swelled_lymph_nodes",
      label: "Swelled Lymph Nodes"
    },
    {
      value: "swelling_joints",
      label: "Swelling Joints"
    },
    {
      value: "swelling_of_stomach",
      label: "Swelling Of Stomach"
    },
    {
      value: "swollen_blood_vessels",
      label: "Swollen Blood Vessels"
    },
    {
      value: "swollen_extremeties",
      label: "Swollen Extremeties"
    },
    {
      value: "swollen_legs",
      label: "Swollen Legs"
    },
    {
      value: "throat_irritation",
      label: "Throat Irritation"
    },
    {
      value: "toxic_look_(typhos)",
      label: "Toxic Look (Typhos)"
    },
    {
      value: "ulcers_on_tongue",
      label: "Ulcers On Tongue"
    },
    {
      value: "unsteadiness",
      label: "Unsteadiness"
    },
    {
      value: "visual_disturbances",
      label: "Visual Disturbances"
    },
    {
      value: "vomiting",
      label: "Vomiting"
    },
    {
      value: "watering_from_eyes",
      label: "Watering From Eyes"
    },
    {
      value: "weakness_in_limbs",
      label: "Weakness In Limbs"
    },
    {
      value: "weakness_of_one_body_side",
      label: "Weakness Of One Body Side"
    },
    {
      value: "weight_gain",
      label: "Weight Gain"
    },
    {
      value: "weight_loss",
      label: "Weight Loss"
    },
    {
      value: "yellow_crust_ooze",
      label: "Yellow Crust Ooze"
    },
    {
      value: "yellow_urine",
      label: "Yellow Urine"
    },
    {
      value: "yellowing_of_eyes",
      label: "Yellowing Of Eyes"
    },
    {
      value: "yellowish_skin",
      label: "Yellowish Skin"
    }
    ];


export default diseaselist;
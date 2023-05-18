import Image_1 from '../Components/Image/PowerAmplifier.jpg';
const HEAD = {
  Section_1: {
    Heading: "Vibration Testing",
    Product_Name: "Power Amplifier",
    Product_Sub_Heading:
      "The highly integrated gain control block of the DLU is designed using a digital potentiometer",
    Set_Up: "EASY SET-UP | 18/7 TECHNICAL SUPPORT",
    Get_Info: "GET INFO TODAY!",
    Image_Url:
    Image_1,
  },

  section1: {
    heading: "Power Amplifier",
    desc: "CDA’s Power Amplifiers use compact and extremely efficient power modules. These help to amplify the small electrical signal from the Vibration Controller to a proportionally high voltage and high current output, that is ideal to drive the shaker. The design of the Power Amplifier ensures energy and space. CDA series Power Amplifier use solid-state power devices in a Class-D Full Bridge configuration. They are digitally modulated with a high frequency pulse width modulated signal with efficiency of over 92%. Their modular construction makes them easy to handle and arrange for maximum output power with direct coupling to any resistive or inductive load. Integral air cooled design ensures continuous duty cycle without sacrificing performance at peak temperature and humidity.",
    desc2:
      "These Power Amplifiers are compatible with any make of Electrodynamic Shakers and are designed to provide continuous rated voltage and current at high ambient temperature and humidity. A low knee filter provides smooth output, while removing switching noise and electromagnetic interference. A zobel network is dedicated for impedance matching over a wide range of frequencies for inductive loads. Adjustable current limit is also provided for controlling maximum output power so that accidents can be avoided.",
    desc3:
      "Assembled in industry standard modular racks, all modules of our Power Amplifier are rack mountable. Removing and installing modules is made easy via guide rails on which every module is designed to slide. Designed to meet international design and safety standards, every module of our Power Amplifier is feature rich and contains its own power entry, power filtering, error indication and EMI conforming systems. Continuous upgrade of technology to better meet the international standards and reduce the carbon footprint of our system is a never-ending process at CDA. Through our various training, services and maintenance programs, we keep our customers updated with the latest product offerings and upgrades.",
  },
  section2: {
    heading: "Digital Logic Unit",
    desc: "The microcontroller based Digital Logic Unit (DLU) controls and monitors the system features and safety interlocks of the CDA series Power Amplifier. The logic unit acts as a user friendly interface between the user and the equipment and can be operated both in manual and auto modes.",
    desc2:
      "System parameters and trip interlocks are displayed on the alphanumeric display of the feather touch membrane keyboard front panel. Soft start and controlled shut down is offered with an online key on the front panel.",
    desc3:
      "Shaker and amplifier safety interlocks are monitored and indicated on the front panel through a microcontroller chip. Interlock signals are routed through isolators and buffer network for proper latching and to prevent false triggering.",
    desc4:
      "The signals are latched on to the fault analysis section of the microcontroller. Only after all faults are resolved, the system is allowed to go Online and increase the gain. Major system interlocks associated with CDA series of amplifier are over current, field fail, displacement limit, cooling shaker, over temperature, etc.",
  },
  section4: {
    heading: "Internal Oscillator",
    desc: "The internal oscillator is a feature provided in the DLU for manual mode of operations wherein the g level is not controlled. The output of the internal oscillator is a pure sine wave. Its gain is controlled via the feather touch membrane keyboard front panel. Output voltage, current and frequency are displayed on the alphanumeric display. The oscillator is capable of producing sine wave from 1Hz to 10kHz.",
  },
  section5: {
    heading: "Signal Source Selection",
    desc: "As the DLU can generate its own sine signal in addition to the external signal from a Vibration Controller, it features a signal source selection that allows users to seamlessly switch between internal and external signal source using the feather touch membrane keyboard front panel. The selectable signal path offers negligible resistance and ensures signal integrity.",
  },
  section6: {
    heading: "Gain Control",
    desc: "The highly integrated gain control block of the DLU is designed using a digital potentiometer. All changes in gain are made gradually, one step at a time, to prevent any spike or sudden movement of the armature. Clamp and release operation is done automatically by the microcontroller inside the DLU based upon various inputs from the user and the interlocks.",
  },
  section7: {
    heading: "Auto Centring",
    desc: "All shakers from CDA have dynamic auto centring except DS 125 and DS 140, which features a mechanical only auto centring. Models DS 180 to DS 760 feature a combination of pneumatic + DC bias based auto centring. The mechanical axial stiffness of these models is nearly negligible. A displacement sensor is used calculate the exact position of armature in real-time. Based on this data, a digital control loop utilises air diaphragm and bellows for pneumatic auto centring and an analog control loop utilises DC bias for the Power Modules for DC bias auto centring.",
  },
  section8: {
    heading: "Power Amplifier Remote",
    desc: "Power Amplifier Remote is provided as a separate module for applications that require remote control of the Power Amplifier and monitoring of all parameters and interlocks on a PC. This feature completely replicates the functionality of the LCD screen and the feather touch membrane keyboard on the Power Amplifier on the PC. It provides customers with the capability to control and monitor the following: System Controls: Shaker Field, Shaker Cooling, Reset, Online, Amplifier Gain. System Parameters: Output Voltage, Output Current, Amplifier Temperature, Shaker Temperature, Gain",
    desc1: "The remote application interfaces with the DLU via the following options: RS232 for low end application with distances up to 25 meters, RS485 for high end application with distances up to 1 kilometre",
    desc2: "The system is designed on robust and versatile HEX command based protocol stack. It takes account of the start-up and shut-down sequence and does not allow user to input conflicting data. Associated cables and accessories are provided along with the application."
},
section9: {
    heading: "Power Module",
    desc: "The high power density and efficiency of the Power Modules of CDA series Power Amplifier is the heart of the system. These modules can use MOSFETs or IGBTs as their primary switching devices and can be coupled with numerous types of loads varying from resistive to inductive. As they are designed in a Class-D Full Bridge configuration, their operation is very similar to that of a buck converter. At output voltages lower than the input voltage, output current can be higher than the input current, as long as the input power is equal to the sum of output power and losses.",
    desc1: "Every power module is rack mounted and features a wire free design implemented using copper bus bars instead of wires. This ensures that our power module never faces any issues pertaining to loose or damaged connection. Each power module of the CDA series has a built-in PWM generation and management. These modules are stacked in master slave configuration for their parallel operation in the amplifier. PWM in paralleled modules is synchronised through master clock and a current feedback network is also implemented for precise current sharing amongst modules. Three-sigma design ensures peak current capability for continuous random operation, without affecting the life of the power device.",
    desc2: "Driver section of the Power Module provides the necessary gate pulse to switch the conduction state of power devices from on to off and vice versa. A galvanic isolation-based gate driver circuit provides gate signals with negligible propagation and time delays. The final stage of the driver has a totem pole circuit in push-pull configuration for fast charging and discharging of the gate capacitances of the power devices at high frequencies. In a multiple module system, one module is master and the rest are slaves. The driver section of the master module generates the clock that is followed by every module in that system. This syncs all the PWM signals and reduces the final output ripple. The driver section also has two feedback networks. First is a voltage feedback to ensure output waveform is proportional to input waveform. Second is a current feedback to ensure equal current is drawn from every module in a system."
},
section10: {
    heading: "Power Section",
    desc: "We are connected in full bridge configuration and mounted on a common heat sink. The integral cooling fans ensure safe thermal operation.",
    desc1: "Each half of the bridge switches at modulated frequency such that the duty cycle varies at input signal rate. Each side is driven out of phase so that an amplified PWM signal appears across the bridge output.",
    desc2: "An array of heat sensors and two dedicated current sensors ensure the safety of this section. They are factory set to respond to the absolute maximum limits of the devices to ensure their safety in the event of a malfunction."
},
section11: {
    heading: "Feedback Section",
    desc: "Voltage feedback from the output terminal of the power section (within the output filter) to the PWM controller makes a flat response Power Amplifier. The loop incorporates DC and high frequency derivative feedback. An integrator in the loop provides linear gain and low harmonic distortion. Overall current of the power module is sensed by a non-contacting sensor which is used for the purpose of tripping and current sharing.",
},
section12: {
    heading: "Filter Section",
    desc: "Sufficient attenuation to high frequency is done by LC filters to get a pure amplified output. The major part is a combination of inductor and low ESR high frequency capacitors. The final stage of the filter section contains capacitor network for minimising any noise and electromagnetic interferences along with the zobel network for impedance matching.",
},
section13: {
    heading: "HVDC Section",
    desc: "The Power Amplifiers run on a widely acceptable range of 3-phase mains input and does not require any special operating environment or support equipment. Step-down 3-phase AC output of highly efficient vacuum impregnated transformer is rectified using three phase bridge rectifiers. Bridge rectifiers of single body construction are used for space saving and good heat sinking characteristics, alongside high voltage capacitors to suppress transients and minimise mains ripple. Different protection circuits are coupled at various stages for synchronisation. Single Phase Preventer is used at the 3-phase input, which senses any phase loss and any imbalance in 3-phase line voltage through phase synchronisation relay. It also displays the phase status on the Digital Logic Unit.",
},
Section14: {
    Heading: "Power Amplifier Air Cooled Series",
    Table_Heading: "Shaker Model",
    Table_Heading2: "Amplifier Model",
    Table_Heading3: "System Rating",
    Table_Heading4: "Power Output",
    Table_Heading5: "Enclosure",
    Table_data: [
        {
            ShakerModel: "DS 125",
            AmplifierModel: "PA 1K",
            SystemRating: "100 kgf",
            PowerOutput: "1 kVA",
            Enclosure: "One, 19-inch cabinet, bench / table top"
        },
        {
            ShakerModel: "DS 125",
            AmplifierModel: "PA 1.5K",
            SystemRating: "150 kgf",
            PowerOutput: "1.5 kVA",
            Enclosure: "One, 19-inch cabinet, bench / table top"
        },
        {
            ShakerModel: "DS 140",
            AmplifierModel: "PA 2K",
            SystemRating: "200 kgf",
            PowerOutput: "2 kVA",
            Enclosure: "One, 19-inch rack, 30 unit height"
        },
        {
            ShakerModel: "DS 140",
            AmplifierModel: "PA 3K",
            SystemRating: "300 kgf",
            PowerOutput: "3 kVA",
            Enclosure: "One, 19-inch rack, 30 unit height"
        },
        {
            ShakerModel: "DS 180",
            AmplifierModel: "PA 4K",
            SystemRating: "400 kgf",
            PowerOutput: "4 kVA",
            Enclosure: "One, 19-inch rack, 30 unit height"
        },
        {
            ShakerModel: "DS 180",
            AmplifierModel: "PA 6K",
            SystemRating: "600 kgf",
            PowerOutput: "6 kVA",
            Enclosure: "One, 19-inch rack, 30 unit height"
        },
        {
            ShakerModel: "DS 240",
            AmplifierModel: "PA 10K",
            SystemRating: "1000 kgf	",
            PowerOutput: "10 kVA",
            Enclosure: "One, 19-inch rack, 30 unit height"
        },
        {
            ShakerModel: "DS 240",
            AmplifierModel: "PA 15K",
            SystemRating: "1500 kgf",
            PowerOutput: "15 kVA",
            Enclosure: "One, 19-inch rack, 30 unit height"
        },
        {
            ShakerModel: "DS 300",
            AmplifierModel: "PA 24K",
            SystemRating: "2000 kgf",
            PowerOutput: "24 kVA",
            Enclosure: "One, 19-inch rack, 36 unit height"
        },
        {
            ShakerModel: "DS 300",
            AmplifierModel: "PA 32K",
            SystemRating: "2500 kgf",
            PowerOutput: "32 kVA",
            Enclosure: "One, 19-inch rack, 36 unit height"
        },
        {
            ShakerModel: "DS 360",
            AmplifierModel: "PA 36K",
            SystemRating: "3000 kgf",
            PowerOutput: "36 kVA",
            Enclosure: "One, 19-inch rack, 36 unit height"
        },
        {
            ShakerModel: "DS 360",
            AmplifierModel: "PA 45K",
            SystemRating: "3500 kgf",
            PowerOutput: "45 kVA",
            Enclosure: "One, 19-inch rack, 36 unit height"
        },
        {
            ShakerModel: "DS 440",
            AmplifierModel: "PA 48K",
            SystemRating: "4000 kgf",
            PowerOutput: "48 kVA",
            Enclosure: "One, 19-inch rack, 36 unit height"
        },
        {
            ShakerModel: "DS 440",
            AmplifierModel: "PA 56K",
            SystemRating: "4800 kgf",
            PowerOutput: "56 kVA",
            Enclosure: "One, 19-inch rack, 36 unit height"
        },
        {
            ShakerModel: "DS 440",
            AmplifierModel: "PA 60K",
            SystemRating: "5000 kgf",
            PowerOutput: "60 kVA",
            Enclosure: "One, 19-inch rack, 36 unit height"
        },
        {
            ShakerModel: "DS 440",
            AmplifierModel: "PA 80K",
            SystemRating: "6000 kgf",
            PowerOutput: "80 kVA",
            Enclosure: "One, 19-inch rack, 36 unit height"
        },
        {
            ShakerModel: "DS 440A",
            AmplifierModel: "PA 60K",
            SystemRating: "6000 kgf",
            PowerOutput: "60 kVA",
            Enclosure: "Two, 19-inch rack, 36 unit height"
        },
        {
            ShakerModel: "DS 440A",
            AmplifierModel: "PA 80K",
            SystemRating: "8000 kgf",
            PowerOutput: "80 kVA",
            Enclosure: "Two, 19-inch rack, 36 unit height"
        }
    ],
    Heading2: "Power Amplifier Water Cooled Series",
    Table_Heading21: "Shaker Model",
    Table_Heading22: "Amplifier Model",
    Table_Heading32: "System Rating",
    Table_Heading42: "Power Output",
    Table_Heading52: "Enclosure",
    Table_data2: [
        {		  
            ShakerModel: "DSW 500",
            AmplifierModel: "PA 120K",
            SystemRating: "7000 kgf",
            PowerOutput: "120 kVA",
            Enclosure: "Seven, 19-inch rack, 36 unit height"
        },
        {				  
            ShakerModel: "DSW 500",
            AmplifierModel: "PA 160K",
            SystemRating: "10000 kgf",
            PowerOutput: "160 kVA",
            Enclosure: "Seven, 19-inch rack, 36 unit height	"
        },
        {						  
            ShakerModel: "DSW 590",
            AmplifierModel: "PA 200K",
            SystemRating: "13000 kgf",
            PowerOutput: "200 kVA",
            Enclosure: "Seven, 19-inch rack, 36 unit height"
        },
        {		  
            ShakerModel: "DSW 590",
            AmplifierModel: "PA 240K",
            SystemRating: "16000 kgf",
            PowerOutput: "240 kVA",
            Enclosure: "Seven, 19-inch rack, 36 unit height"
        },
        {									  
            ShakerModel: "DSW 760",
            AmplifierModel: "PA 280K",
            SystemRating: "29000 kgf",
            PowerOutput: "280 kVA",
            Enclosure: "Eight, 19-inch rack, 36 unit height	"
        },
        {						  
            ShakerModel: "DSW 760",
            AmplifierModel: "PA 320K",
            SystemRating: "32000 kgf",
            PowerOutput: "320 kVA",
            Enclosure: "Eight, 19-inch rack, 36 unit height"
        },
        
    ],
    Note: "Customised specifications are also tailored on request",
    Note_Para:"Specifications are correct at the time of publication and are subject to improvement or amendment without prior notice"
},
};

export default HEAD;

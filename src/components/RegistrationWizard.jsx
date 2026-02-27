import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight, ChevronLeft, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { personalInfoSchema, accountDetailsSchema, wizardSchema } from '../schemas/wizardSchema';
import Step1PersonalInfo from './Step1PersonalInfo';
import Step2AccountDetails from './Step2AccountDetails';
import Step3Review from './Step3Review';
import ProgressBar from './ProgressBar';
import SuccessScreen from './SuccessScreen';

const RegistrationWizard = () => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        trigger,
        getValues,
        reset,
        formState: { errors, isValid }
    } = useForm({
        resolver: zodResolver(
            step === 1 ? personalInfoSchema : step === 2 ? accountDetailsSchema : wizardSchema
        ),
        mode: 'onChange',
    });

    const nextStep = async () => {
        const fields = step === 1
            ? ['firstName', 'lastName', 'dob']
            : ['email', 'password', 'confirmPassword'];

        const isStepValid = await trigger(fields);
        if (isStepValid) {
            setStep((s) => s + 1);
        }
    };

    const prevStep = () => {
        setStep((s) => s - 1);
    };

    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
        setIsSubmitted(true);
    };

    const resetForm = () => {
        reset();
        setStep(1);
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="wizard-container"
            >
                <SuccessScreen onReset={resetForm} />
            </motion.div>
        );
    }

    return (
        <div className="wizard-container">
            <ProgressBar currentStep={step} totalSteps={3} />

            <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step === 1 && <Step1PersonalInfo register={register} errors={errors} />}
                        {step === 2 && <Step2AccountDetails register={register} errors={errors} />}
                        {step === 3 && <Step3Review formData={getValues()} />}
                    </motion.div>
                </AnimatePresence>

                <div className="navigation-btns">
                    {step > 1 && (
                        <button type="button" className="btn btn-secondary" onClick={prevStep}>
                            <ChevronLeft size={18} /> Back
                        </button>
                    )}

                    <div style={{ marginLeft: 'auto' }}>
                        {step < 3 ? (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={nextStep}
                                disabled={!isValid}
                            >
                                Next <ChevronRight size={18} />
                            </button>
                        ) : (
                            <button type="submit" className="btn btn-primary">
                                Submit <Send size={18} />
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegistrationWizard;

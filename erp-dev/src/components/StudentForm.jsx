import { useState } from 'react';
import { X, UserPlus, Upload } from 'lucide-react';
import PropTypes from 'prop-types';

export default function StudentForm({ onClose }) {
    const [formData, setFormData] = useState({
        // Personal Details
        name: '',
        fatherName: '',
        motherName: '',
        dob: '',
        gender: '',
        mobile: '',
        email: '',
        bloodGroup: '',
        nationality: '',

        // Educational Details
        course: '',
        previousSchool: '',
        previousPercentage: '',
        yearOfPassing: '',
        documents: {
            marksheet: null,
            characterCertificate: null,
            idProof: null,
            photo: null,
        },

        // Residential Details
        address: {
            street: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
        },
        permanentAddress: {
            street: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
        },

        // Payment Details
        paymentMode: '',
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        category: '',
        scholarshipRequired: false,
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [section, field] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleFileChange = (e, documentType) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            documents: {
                ...prev.documents,
                [documentType]: file
            }
        }));
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-[#FF4B2B]/10 rounded-full">
                        <UserPlus className="w-8 h-8 text-[#FF4B2B]" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#FF4B2B]">New Student Registration</h2>
                        <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
                    </div>
                </div>

                <div className="mb-6 bg-gray-100 h-2 rounded-full">
                    <div
                        className="h-full bg-[#FF4B2B] rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Personal Details */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Father&apos;s Name</label>
                                    <input
                                        type="text"
                                        name="fatherName"
                                        value={formData.fatherName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Mother&apos;s Name</label>
                                    <input
                                        type="text"
                                        name="motherName"
                                        value={formData.motherName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Gender</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Blood Group</label>
                                    <select
                                        name="bloodGroup"
                                        value={formData.bloodGroup}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Educational Details */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Educational Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Course you are applying for</label>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Course</option>
                                        <option value="mba">BCA</option>
                                        <option value="mba">MCA</option>
                                        <option value="btech">B.Tech</option>
                                        <option value="mtech">M.Tech</option>
                                        <option value="bba">BBA</option>
                                        <option value="mba">MBA</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Previous Education</label>
                                    <select
                                        type="text"
                                        name="previousSchool"
                                        value={formData.previousSchool}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="mba">High School</option>
                                        <option value="mba">Intermediate</option>
                                        <option value="btech">Diploma</option>
                                    </select>


                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Previous Percentage/CGPA</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        name="previousPercentage"
                                        value={formData.previousPercentage}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Year of Passing</label>
                                    <input
                                        type="number"
                                        name="yearOfPassing"
                                        value={formData.yearOfPassing}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-md font-medium text-gray-900">Required Documents</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Previous Marksheet</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileChange(e, 'marksheet')}
                                                className="hidden"
                                                id="marksheet"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                            />
                                            <label
                                                htmlFor="marksheet"
                                                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                                            >
                                                <Upload className="w-4 h-4" />
                                                <span>Upload Marksheet</span>
                                            </label>
                                            {formData.documents.marksheet && (
                                                <span className="text-sm text-green-600">File selected</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Character Certificate</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileChange(e, 'characterCertificate')}
                                                className="hidden"
                                                id="characterCertificate"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                            />
                                            <label
                                                htmlFor="characterCertificate"
                                                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                                            >
                                                <Upload className="w-4 h-4" />
                                                <span>Upload Certificate</span>
                                            </label>
                                            {formData.documents.characterCertificate && (
                                                <span className="text-sm text-green-600">File selected</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">ID Proof</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileChange(e, 'idProof')}
                                                className="hidden"
                                                id="idProof"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                            />
                                            <label
                                                htmlFor="idProof"
                                                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                                            >
                                                <Upload className="w-4 h-4" />
                                                <span>Upload ID Proof</span>
                                            </label>
                                            {formData.documents.idProof && (
                                                <span className="text-sm text-green-600">File selected</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Passport Size Photo</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileChange(e, 'photo')}
                                                className="hidden"
                                                id="photo"
                                                accept=".jpg,.jpeg,.png"
                                            />
                                            <label
                                                htmlFor="photo"
                                                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                                            >
                                                <Upload className="w-4 h-4" />
                                                <span>Upload Photo</span>
                                            </label>
                                            {formData.documents.photo && (
                                                <span className="text-sm text-green-600">File selected</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Residential Details */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Residential Details</h3>

                            <div className="space-y-4">
                                <h4 className="text-md font-medium text-gray-900">Current Address</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Street Address</label>
                                        <input
                                            type="text"
                                            name="address.street"
                                            value={formData.address.street}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">City</label>
                                        <input
                                            type="text"
                                            name="address.city"
                                            value={formData.address.city}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">State</label>
                                        <input
                                            type="text"
                                            name="address.state"
                                            value={formData.address.state}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Zip Code</label>
                                        <input
                                            type="text"
                                            name="address.zipcode"
                                            value={formData.address.zipcode}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Country</label>
                                        <input
                                            type="text"
                                            name="address.country"
                                            value={formData.address.country}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-md font-medium text-gray-900">Permanent Address</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Street Address</label>
                                        <input
                                            type="text"
                                            name="permanentAddress.street"
                                            value={formData.permanentAddress.street}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">City</label>
                                        <input
                                            type="text"
                                            name="permanentAddress.city"
                                            value={formData.permanentAddress.city}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">State</label>
                                        <input
                                            type="text"
                                            name="permanentAddress.state"
                                            value={formData.permanentAddress.state}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Zip Code</label>
                                        <input
                                            type="text"
                                            name="permanentAddress.zipcode"
                                            value={formData.permanentAddress.zipcode}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Country</label>
                                        <input
                                            type="text"
                                            name="permanentAddress.country"
                                            value={formData.permanentAddress.country}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Payment Details */}
                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Payment Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Payment Mode</label>
                                    <select
                                        name="paymentMode"
                                        value={formData.paymentMode}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Payment Mode</option>
                                        <option value="netBanking">Net Banking</option>
                                        <option value="card">Debit/Credit Card</option>
                                        <option value="upi">UPI</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Bank Name</label>
                                    <input
                                        type="text"
                                        name="bankName"
                                        value={formData.bankName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Account Number</label>
                                    <input
                                        type="text"
                                        name="accountNumber"
                                        value={formData.accountNumber}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">IFSC Code</label>
                                    <input
                                        type="text"
                                        name="ifscCode"
                                        value={formData.ifscCode}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF4B2B] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="general">General</option>
                                        <option value="obc">OBC</option>
                                        <option value="sc">SC</option>
                                        <option value="st">ST</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Scholarship Required</label>
                                    <div className="flex items-center space-x-4 mt-2">
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="scholarshipRequired"
                                                value="true"
                                                checked={formData.scholarshipRequired === true}
                                                onChange={() => setFormData(prev => ({ ...prev, scholarshipRequired: true }))}
                                                className="text-[#FF4B2B] focus:ring-[#FF4B2B]"
                                            />
                                            <span>Yes</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="scholarshipRequired"
                                                value="false"
                                                checked={formData.scholarshipRequired === false}
                                                onChange={() => setFormData(prev => ({ ...prev, scholarshipRequired: false }))}
                                                className="text-[#FF4B2B] focus:ring-[#FF4B2B]"
                                            />
                                            <span>No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between pt-6 border-t">
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={() => setCurrentStep(currentStep - 1)}
                                className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Previous
                            </button>
                        )}
                        <div className="ml-auto space-x-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            {currentStep < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(currentStep + 1)}
                                    className="px-6 py-2.5 bg-[#FF4B2B] text-white rounded-lg hover:bg-[#FF4B2B]/90 transition-colors"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-[#FF4B2B] text-white rounded-lg hover:bg-[#FF4B2B]/90 transition-colors"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

StudentForm.propTypes = {
    onClose: PropTypes.func.isRequired
};
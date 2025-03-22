import { useState } from 'react';
import { X, School, Upload } from 'lucide-react';
import PropTypes from 'prop-types';

export default function FacultyForm({ onClose }) {
    const [formData, setFormData] = useState({
        // Personal Details
        name: '',
        dob: '',
        gender: '',
        mobile: '',
        email: '',
        maritalStatus: '',
        nationality: '',
        bloodGroup: '',
        category: '',

        // Professional Details
        department: '',
        designation: '',
        employeeType: '',
        joiningDate: '',
        officialEmail: '',
        experience: '',
        specialization: '',
        currentSalary: '',

        // Educational Details
        education: [],
        phdDetails: '',
        publications: [],
        researchWork: '',
        awards: [],
        certifications: [],
        documents: {
            resume: null,
            idProof: null,
            photo: null,
            certificates: null,
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

        // Additional Information
        socialMedia: {
            linkedin: '',
            twitter: '',
            researchGate: '',
        },
        references: [],
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

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
                    <div className="p-3 bg-[#FF8C42]/10 rounded-full">
                        <School className="w-8 h-8 text-[#FF8C42]" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#FF8C42]">New Faculty Registration</h2>
                        <p className="text-gray-600">Step {currentStep} of {totalSteps}</p>
                    </div>
                </div>

                <div className="mb-6 bg-gray-100 h-2 rounded-full">
                    <div
                        className="h-full bg-[#FF8C42] rounded-full transition-all duration-300"
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
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Gender</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Marital Status</label>
                                    <select
                                        name="maritalStatus"
                                        value={formData.maritalStatus}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select Status</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="divorced">Divorced</option>
                                        <option value="widowed">Widowed</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Nationality</label>
                                    <input
                                        type="text"
                                        name="nationality"
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Blood Group</label>
                                    <select
                                        name="bloodGroup"
                                        value={formData.bloodGroup}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-md font-medium text-gray-900">Professional Information</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Department</label>
                                        <select
                                            name="department"
                                            value={formData.department}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                            required
                                        >
                                            <option value="">Select Department</option>
                                            <option value="cs">Computer Science</option>
                                            <option value="ee">Electrical Engineering</option>
                                            <option value="me">Mechanical Engineering</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Designation</label>
                                        <select
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                            required
                                        >
                                            <option value="">Select Designation</option>
                                            <option value="professor">Professor</option>
                                            <option value="associate">Associate Professor</option>
                                            <option value="assistant">Assistant Professor</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Employee Type</label>
                                        <select
                                            name="employeeType"
                                            value={formData.employeeType}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                            required
                                        >
                                            <option value="">Select Type</option>
                                            <option value="permanent">Permanent</option>
                                            <option value="contract">Contract</option>
                                            <option value="visiting">Visiting</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Date of Joining</label>
                                        <input
                                            type="date"
                                            name="joiningDate"
                                            value={formData.joiningDate}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Educational Details */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Educational Details</h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Education History</label>
                                        <textarea
                                            name="education"
                                            value={formData.education}
                                            onChange={handleChange}
                                            placeholder="Enter your education history (degree, institution, year)"
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                            rows="4"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">PhD Details</label>
                                        <textarea
                                            name="phdDetails"
                                            value={formData.phdDetails}
                                            onChange={handleChange}
                                            placeholder="Enter your PhD details (if applicable)"
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                            rows="4"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Publications</label>
                                        <textarea
                                            name="publications"
                                            value={formData.publications}
                                            onChange={handleChange}
                                            placeholder="List your publications"
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                            rows="4"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Research Work</label>
                                        <textarea
                                            name="researchWork"
                                            value={formData.researchWork}
                                            onChange={handleChange}
                                            placeholder="Describe your research work"
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                            rows="4"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-md font-medium text-gray-900">Required Documents</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Resume/CV</label>
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="file"
                                                    onChange={(e) => handleFileChange(e, 'resume')}
                                                    className="hidden"
                                                    id="resume"
                                                    accept=".pdf,.doc,.docx"
                                                />
                                                <label
                                                    htmlFor="resume"
                                                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                                                >
                                                    <Upload className="w-4 h-4" />
                                                    <span>Upload Resume</span>
                                                </label>
                                                {formData.documents.resume && (
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
                                            <label className="text-sm font-medium text-gray-700">Photo</label>
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
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Certificates</label>
                                            <div className="flex items-center space-x-2">
                                                <input
                                                    type="file"
                                                    onChange={(e) => handleFileChange(e, 'certificates')}
                                                    className="hidden"
                                                    id="certificates"
                                                    accept=".pdf"
                                                    multiple
                                                />
                                                <label
                                                    htmlFor="certificates"
                                                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                                                >
                                                    <Upload className="w-4 h-4" />
                                                    <span>Upload Certificates</span>
                                                </label>
                                                {formData.documents.certificates && (
                                                    <span className="text-sm text-green-600">Files selected</span>
                                                )}
                                            </div>
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
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
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-md font-medium text-gray-900">Social Media Links</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">LinkedIn Profile</label>
                                        <input
                                            type="url"
                                            name="socialMedia.linkedin"
                                            value={formData.socialMedia.linkedin}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Twitter Profile</label>
                                        <input
                                            type="url"
                                            name="socialMedia.twitter"
                                            value={formData.socialMedia.twitter}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">ResearchGate Profile</label>
                                        <input
                                            type="url"
                                            name="socialMedia.researchGate"
                                            value={formData.socialMedia.researchGate}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent transition-all"
                                        />
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
                                    className="px-6 py-2.5 bg-[#FF8C42] text-white rounded-lg hover:bg-[#FF8C42]/90 transition-colors"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-[#FF8C42] text-white rounded-lg hover:bg-[#FF8C42]/90 transition-colors"
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

FacultyForm.propTypes = {
    onClose: PropTypes.func.isRequired
};